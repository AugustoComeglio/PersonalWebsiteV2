import React from "react";
import styles from "./CardExperiencia.module.css";

const CardExperiencia = ({
  Puesto,
  Empresa,
  Modalidad,
  FechaInicio,
  FechaFin,
  Web,
  Proyecto,
  Tareas,
  Src,
}) => {
  return (
    <article className={styles.card}>
      <hearder className={styles.header}>
        <div className={styles.title}>
          <b>{Puesto}</b>
        </div>
      </hearder>

      <div className={styles.bodyCard}>
        <div>
          <div className={styles.contimg}>
            <img className={styles.img} src={Src} alt={`Logo de ${Empresa}`} />
          </div>
        </div>

        <dl className={styles.datos}>
          <div className={styles.descripcion}>
            <dt>Empresa:</dt>
            <dd>{Empresa}</dd>
          </div>
          <div className={styles.descripcion}>
            <dt>Modalidad:</dt>
            <dd>{Modalidad}</dd>
          </div>
          <div className={styles.descripcion}>
            <dt>Fecha Incio:</dt>
            <dd>{FechaInicio}</dd>
          </div>
          <div className={styles.descripcion}>
            <dt>Fecha Fin:</dt>
            <dd>{FechaFin}</dd>
          </div>
          <div className={styles.descripcion}>
            <dt>Web:</dt>
            <dd>
              <a className={styles.link} href={Web} target="_blank">
                {" "}
                {Empresa}
              </a>
            </dd>
          </div>
          <div className={styles.descripcion}>
            <dt>Proyecto:</dt>
            <dd>{Proyecto}</dd>
          </div>
          <p className={styles.descripcion}>
            <dt>Tareas:</dt>
            <dd>{Tareas}</dd>
          </p>
        </dl>
      </div>
    </article>
  );
};

export default CardExperiencia;
