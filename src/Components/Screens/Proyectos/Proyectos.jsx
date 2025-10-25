import React from "react";
import Header from "../../UI/Header/Header";
import Footer from "../../UI/Footer/Footer";
import styles from "./Proyectos.module.css";
import Title from "../../UI/Title/Title";
import CardProyecto from "../../UI/Cards/CardProyecto/CardProyecto";
import { useState, useEffect } from "react";

const Proyectos = () => {

   const [proyectos, setProy] = useState([]);
  
    useEffect(() => {
      fetch("/Data/Proyectos.json")
        .then((res) => res.json())
        .then((data) => setProy(data))
        .catch((error) => console.error("Error al cargar JSON:", error));
    }, []);

  return (
    <div className={styles.contPrincipal}>
      <Header />
      <main className={styles.main}>
        <Title title="Proyectos" />
        <div className={styles.contenedor}>
          {proyectos.map((i) => (
            <CardProyecto
              key={i.id}
              Nombre={i.Nombre}
              Src={i.Src}
              FechaInicio={i.FechaInicio}
              FechaFin={i.FechaFin}
              Descrpcion={i.Descrpcion}
              Links={i.Links}
              Herramientas={i.Herramientas}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Proyectos;
