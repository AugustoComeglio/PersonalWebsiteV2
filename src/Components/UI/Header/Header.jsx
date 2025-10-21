import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {

  return (
    <>
      <header className={styles.header}>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <Link to="/home" className={styles.link}>Home</Link>
          </li>
          <li className={styles.li}>
            <Link to="/contacto" className={styles.link}>Contacto</Link>
          </li>
          <li className={styles.li}>
            <Link to="/experiencia" className={styles.link}>Experiencia</Link>
          </li>
          <li className={styles.li}>
            <Link to="/educacion"className={styles.link}>Educación</Link>
          </li>
          <li className={styles.li}>
            <Link to="/cursos"className={styles.link}>Cursos</Link>
          </li>
          <li className={styles.li}>
            <Link to="/proyectos"className={styles.link}>Proyectos</Link>
          </li>
          <li className={styles.li}>
            <Link to="/herramientas"className={styles.link}>Herramientas</Link>
          </li>
          <li className={styles.li}>
            <Link to="/idiomas" className={styles.link}>Idiomas</Link>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
