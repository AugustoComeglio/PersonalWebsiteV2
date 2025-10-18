import React from "react";
import styles from "./Header.module.css";
import { useNavigate } from "react-router-dom";

const Header = () => {

  const navigate = useNavigate()


  return (
    <>
      <header className={styles.header}>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <a className={styles.a} onClick={()=> navigate("/home")}>Home</a>
          </li>
          <li className={styles.li}>
            <a className={styles.a} onClick={()=> navigate("/contacto")}>Contacto</a>
          </li>
          <li className={styles.li}>
            <a className={styles.a} onClick={()=> navigate("/experiencia")}>Experiencia</a>
          </li>
          <li className={styles.li}>
            <a className={styles.a} onClick={()=> navigate("/educacion")}>Educación</a>
          </li>
          <li className={styles.li}>
            <a className={styles.a} onClick={()=> navigate("/cursos")}>Cursos</a>
          </li>
          <li className={styles.li}>
            <a className={styles.a} onClick={()=> navigate("/proyectos")}>Proyectos</a>
          </li>
          <li className={styles.li}>
            <a className={styles.a} onClick={()=> navigate("/herramientas")}>Herramientas</a>
          </li>
          <li className={styles.li}>
            <a className={styles.a} onClick={()=> navigate("/idiomas")}>Idiomas</a>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
