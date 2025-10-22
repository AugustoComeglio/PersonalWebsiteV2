import Header from "../../UI/Header/Header";
import Footer from "../../UI/Footer/Footer";
import styles from "./Contacto.module.css";
import Title from "../../UI/Title/Title";
import CardContacto from "../../UI/Cards/CardContacto/CardContacto";
import { useState, useEffect } from "react";

const Contacto = () => {
  const [contacto, setContacto] = useState([]);

  useEffect(() => {
    fetch("/Data/Contacto.json")
      .then((res) => res.json())
      .then((data) => setContacto(data))
      .catch((error) => console.error("Error al cargar JSON:", error));
  }, []);

  return (
    <div className={styles.contPrincipal}>
      <Header />
      <main className={styles.main}>
        <Title title="Contacto" />
        <div className={styles.contenedor}>
          {contacto.map((i) => (
            <CardContacto
              key={i.id}
              Src={i.Src}
              Info={i.Info}
              Nombre={i.Nombre}
              Link={i.Link}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contacto;
