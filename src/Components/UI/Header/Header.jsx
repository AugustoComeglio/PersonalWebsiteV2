import { useContext } from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../../Context/ThemeContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from "react";

const Header = () => {

  const { theme, toggleTheme } = useContext(ThemeContext);

  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header className={styles.header}>
        <button
          className={styles.menuButton}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
        </button>
        <ul className={`${styles.ul} ${menuOpen ? styles.active : ""}`}>
          <li className={styles.li}>
            <Link to="/home" className={styles.link} onClick={handleLinkClick}>Home</Link>
          </li>
          <li className={styles.li}>
            <Link to="/contacto" className={styles.link} onClick={handleLinkClick}>Contacto</Link>
          </li>
          <li className={styles.li}>
            <Link to="/experiencia" className={styles.link} onClick={handleLinkClick}>Experiencia</Link>
          </li>
          <li className={styles.li}>
            <Link to="/educacion"className={styles.link} onClick={handleLinkClick}>Educación</Link>
          </li>
          <li className={styles.li}>
            <Link to="/cursos"className={styles.link} onClick={handleLinkClick}>Cursos</Link>
          </li>
          <li className={styles.li}>
            <Link to="/proyectos"className={styles.link} onClick={handleLinkClick}>Proyectos</Link>
          </li>
          <li className={styles.li}>
            <Link to="/herramientas"className={styles.link} onClick={handleLinkClick}>Herramientas</Link>
          </li>
          <li className={styles.li}>
            <Link to="/idiomas" className={styles.link} onClick={handleLinkClick}>Idiomas</Link>
          </li>
        </ul>
        <label className={styles.switch}>
            <input type="checkbox" onChange={toggleTheme} checked={theme === 'dark'} />
            <span className={styles.slider}></span>
        </label>
      </header>
    </>
  );
};

export default Header;
