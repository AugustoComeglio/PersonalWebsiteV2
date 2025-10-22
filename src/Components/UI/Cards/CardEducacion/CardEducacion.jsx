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
        <div className={styles.conttitle}>
          <div className={styles.title}>
            {Institucion}
          </div>
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
        </div>

        <div className={styles.contenedorInfo}>
          <div>
            <div className={styles.contimg}>
              <img className={styles.img} src={Src} title={Institucion} alt={`Logo de ${Institucion}`}/>
            </div>
          </div>

          <div className={styles.datos}>
            <div className={styles.descripcion}>
              <b>Carrera:</b> {Carrera}
            </div>
            <div className={styles.descripcion}>
              <b>Fecha Incio:</b> {FechaInicio}
            </div>
            <div className={styles.descripcion}>
              <b>Fecha Fin:</b> {FechaFin}
            </div>
          </div>
        </div>
      </article>
  );
};

export default CardEducacion;
