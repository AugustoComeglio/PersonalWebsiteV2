import React from "react";
import Header from "../../UI/Header/Header";
import Footer from "../../UI/Footer/Footer";
import styles from "./Experiencia.module.css";
import { useState, useEffect } from "react";
import CardExperiencia from "../../UI/Cards/CardExperiencia/CardExperiencia";
import Title from "../../UI/Title/Title";

const Experiencia = () => {
  const [exp, setExperiencia] = useState([]);

  useEffect(() => {
    fetch("/Data/Experiencia.json")
      .then((res) => res.json())
      .then((data) => setExperiencia(data))
      .catch((error) => console.error("Error al cargar JSON:", error));
  }, []);

  return (
    <div className={styles.contPrincipal}>
      <Header />
      <Title title="Experiencia"/>
      <div className={styles.contenedor}>
        {exp.map((i) => (
          <CardExperiencia
            key={i.id}
            Puesto={i.Puesto}
            Empresa={i.Empresa}
            Modalidad={i.Modalidad}
            FechaInicio={i.FechaInicio}
            FechaFin={i.FechaFin}
            Web={i.Web}
            Proyecto={i.Proyecto}
            Tareas={i.Tareas}
            Src={i.Src}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Experiencia;
