import Header from "../../UI/Header/Header";
import Footer from "../../UI/Footer/Footer";
import Title from "../../UI/Title/Title";
import CardEducacion from "../../UI/Cards/CardEducacion/CardEducacion";
import { useState, useEffect } from "react";
import styles from "./Educacion.module.css";

const Educacion = () => {
  const [ed, setEducacion] = useState([]);

  useEffect(() => {
    fetch("Data/Educacion.json")
      .then((res) => res.json())
      .then((data) => setEducacion(data))
      .catch((error) => console.error("Error al cargar JSON:", error));
  }, []);

  return (
    <div className={styles.contPrincipal}>
      <Header/>
      <main className={styles.main}>
        <Title title="Educación"/>
        <div className={styles.contenedor}>
          {ed.map((i) => (
            <CardEducacion
              key={i.id}
              Institucion={i.Institucion}
              Carrera={i.Carrera}
              FechaInicio={i.FechaInicio}
              FechaFin={i.FechaFin}
              Src={i.Src}
              Status={i.Status}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Educacion;
