import React from "react";
import styles from "./CardIdioma.module.css";

const CardIdioma = ({ Idioma, Src, Nivel }) => {
  return (
    <article className={styles.card}>
      <header className={styles.header}>
        <div className={styles.title}>{Idioma}</div>
      </header>

      <div className={styles.bodyCard}>
        <div className={styles.contimg}>
          <img
            className={styles.img}
            src={Src}
            title={Idioma}
            alt={`Logo de ${Idioma}`}
          />
        </div>
        <dl className={styles.datos}>
          <div className={styles.descripcion}>
            <dt>Nivel:</dt>
            <dd>{Nivel}</dd>
          </div>
        </dl>
      </div>
    </article>
  );
};

export default CardIdioma;
