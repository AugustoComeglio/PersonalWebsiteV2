import React from "react";
import Header from "../../UI/Header/Header";
import Footer from "../../UI/Footer/Footer";
import styles from "./Herramientes.module.css";
import Title from "../../UI/Title/Title";
import { useState, useEffect } from "react";

const Herramientas = () => {
  const [her, setHerramienta] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    fetch("/Data/Herramientas.json")
      .then((res) => res.json())
      .then((data) => setHerramienta(data))
      .catch((err) => console.error("Error al cargar JSON:", err));
  }, []);

   const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.contPrincipal}>
      <Header />
      <Title Title="Herramientas" />
      <div className={styles.contenedor}>

           {her.map((item, index) => (
          <div key={index} className={styles.accordionitem}>
            {/* Encabezado */}
            <button
              className={styles.accordionheader}
              onClick={() => toggleAccordion(index)}
            >
              {item.Tipo}
            </button>

            {/* Contenido */}
            <div
              className={`${styles.accordioncontent} ${
                activeIndex === index ? styles.active : ""
              }`}
            >
              <div className={styles.grid}>
                {item.Herramientas.map((herr, i) => (
                  <div key={i} className={styles.card}>
                    <img
                      src={herr.Src}
                      alt={herr["Nombre:"]}
                      className={styles.imgHerramienta}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}

      </div>
      <Footer />
    </div>
  );
};

export default Herramientas;
