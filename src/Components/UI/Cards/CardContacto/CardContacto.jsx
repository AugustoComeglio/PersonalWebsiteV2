import React from "react";
import styles from "./CardContacto.module.css";

const CardContacto = ({ Nombre, Src, Info, Link }) => {
  return (
    <div className={styles.card}>
      <div className={styles.conttitle}>
        <div className={styles.title}>{Nombre}</div>
      </div>
      <div className={styles.contenedorInfo}>
        <div>
          <div className={styles.contimg}>
            <img className={styles.img} src={Src} title={Nombre} />
          </div>
        </div>
        <div className={styles.datos}>
          <div className={styles.descripcion}>
            <b>Info Contacto: </b>
            {Link ? 
            (<a className={styles.link} href={Link} target="_blank">{Nombre}</a>) : (Info)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardContacto;
