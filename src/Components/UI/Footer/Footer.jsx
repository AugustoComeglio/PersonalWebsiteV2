import React from "react";
import styles from "./Footer.module.css";
import { useState, useEffect } from "react";

const Footer = () => {

  const [contacto, setContacto] = useState([]);
  
    useEffect(() => {
      fetch("/Data/Contacto.json")
        .then((res) => res.json())
        .then((data) => setContacto(data))
        .catch((error) => console.error("Error al cargar JSON:", error));
    }, []);

  return (
    <footer className={styles.footer}>
      <div className={styles.nombre}>
        <div>Augusto Comeglio - 2025</div>
      </div>
      <div className={styles.contactos}>
    <div className={styles.contacto}>
        <img src="/Images/Contacto/email.png" className={styles.img}></img>
        <div>augustoc.98@gmail.com</div>
      </div>
      <div className={styles.contacto}>
        <img src="/Images/Contacto/telefono.png" className={styles.img}></img>
        <div>+54 2634565031</div>
      </div>
      <div className={styles.contacto}>
        <img src="/Images/Contacto/linkedin.png" className={styles.img}></img>
        <div><a className={styles.link} href="https://www.linkedin.com/in/augusto-comeglio-b99b47213/" target="_blank" >LinkedIn</a></div>
      </div>
      <div className={styles.contacto}>
        <img src="/Images/Contacto/github.png" className={styles.img}></img>
        <div><a className={styles.link} href="https://github.com/AugustoComeglio" target="_blank">Git Hub</a></div>
      </div>
      </div>

    </footer>
  );
};

export default Footer;
