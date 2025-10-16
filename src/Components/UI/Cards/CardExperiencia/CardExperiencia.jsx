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
    <>
      <div className={styles.card}>
        <div className={styles.title}>
          <b>{Puesto}</b>
        </div>

        <div className={styles.contenedorInfo}>
          <div>
            <div className={styles.contimg}>
              <img className={styles.img} src={Src} />
            </div>
          </div>

          <div className={styles.datos}>
            <div className={styles.descripcion}>
              <b>Empresa:</b> {Empresa}
            </div>
            <div className={styles.descripcion}>
              <b>Modalidad:</b> {Modalidad}
            </div>
            <div className={styles.descripcion}>
              <b>Fecha Incio:</b> {FechaInicio}
            </div>
            <div className={styles.descripcion}>
              <b>Fecha Fin:</b> {FechaFin}
            </div>
            <div className={styles.descripcion}>
              <b>Web:</b><a className={styles.link} href={Web} target="_blank"> {Empresa}</a>
            </div>
            <div className={styles.descripcion}>
              <b>Proyecto:</b> {Proyecto}
            </div>
            <p className={styles.descripcion}>
              <b>Tareas:</b> {Tareas}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardExperiencia;
