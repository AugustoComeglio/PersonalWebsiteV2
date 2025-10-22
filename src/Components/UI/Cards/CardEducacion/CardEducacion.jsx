import React from "react";
import styles from "./CardEducacion.module.css";

const CardEducacion = ({
  Institucion,
  Carrera,
  FechaInicio,
  FechaFin,
  Src,
  Status,
}) => {
  return (
    <article className={styles.card}>
      <header className={styles.header}>
        <div className={styles.title}>{Institucion}</div>
        <div
          className={`${styles.status} ${
            Status === "In Progress"
              ? styles.inprogress
              : Status === "Done"
              ? styles.done
              : ""
          }`}
        >
          <div className={styles.statusicon}></div>
          <div className={styles.statustexto}>{Status}</div>
        </div>
      </header>

      <div className={styles.bodyCard}>
        <div>
          <div className={styles.contimg}>
            <img
              className={styles.img}
              src={Src}
              title={Institucion}
              alt={`Logo de ${Institucion}`}
            />
          </div>
        </div>

        <dl className={styles.datos}>
          <div className={styles.descripcion}>
            <dt>Carrera:</dt>
            <dd>{Carrera}</dd>
          </div>
          <div className={styles.descripcion}>
            <dt>Fecha Incio:</dt>
            <dd>{FechaInicio}</dd>
          </div>
          <div className={styles.descripcion}>
            <dt>Fecha Fin:</dt>
            <dd>{FechaFin}</dd>
          </div>
        </dl>
      </div>
    </article>
  );
};

export default CardEducacion;
