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
      .catch((error) => console.error("Error al cargar JSON:", error));
  }, []);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.contPrincipal}>
      <Header />
      <main className={styles.main}>
        <Title title="Herramientas" />
        <div className={styles.contenedor}>
          {her.map((item, index) => (
            <div key={index} className={styles.accordionitem}>
              <button
                className={`${styles.accordionheader} ${
                  activeIndex === index ? styles.active : ""
                }`}
                onClick={() => toggleAccordion(index)}
              >
                <span>{item.Tipo}</span>
                <span
                  className={`${styles.accordionicon} ${
                    activeIndex === index ? styles.rotated : ""
                  }`}
                >
                  &gt;
                </span>
              </button>
              <div
                className={`${styles.accordioncontent} ${
                  activeIndex === index ? styles.active : ""
                }`}
              >
                <div className={styles.grid}>
                  {item.Herramientas.map((herr, i) => (
                    <div key={i} className={styles.card} data-text={herr.Nombre}>
                      <img
                        src={herr.Src}
                        className={styles.imgHerramienta}
                        alt={`Logo de ${herr.Nombre}`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Herramientas;
