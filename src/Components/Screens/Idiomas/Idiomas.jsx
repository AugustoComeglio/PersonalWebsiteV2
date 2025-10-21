import Header from "../../UI/Header/Header";
import Footer from "../../UI/Footer/Footer";
import styles from "./Idiomas.module.css";
import CardIdioma from "../../UI/Cards/CardIdioma/CardIdioma";
import { useState, useEffect } from "react";
import Title from "../../UI/Title/Title";

const Idiomas = () => {

  const [idiomas, setIdiomas] = useState([]);

  useEffect(() => {
    fetch("/Data/Idiomas.json")
      .then((res) => res.json())
      .then((data) => setIdiomas(data))
      .catch((error) => console.error("Error al cargar JSON:", error));
  }, []);

  return (
    <div className={styles.contPrincipal}>
      <Header />
      <Title title="Idiomas"/>
      <div className={styles.contenedor}>
        {idiomas.map((i) => (
          <CardIdioma key={i.id} Idioma={i.Idioma} Src={i.Src} Nivel={i.Nivel} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Idiomas;
