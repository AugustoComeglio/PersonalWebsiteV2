import React from "react";
import styles from "./CardContacto.module.css";

const CardContacto = ({ Nombre, Src, Info, Link }) => {
  return (
    <article className={styles.card}>
      <header className={styles.header}>
        <div className={styles.title}>{Nombre}</div>
      </header>
      <div className={styles.bodyCard}>
          <div className={styles.contimg}>
            <img className={styles.img} src={Src} title={Nombre} alt={`Logo de ${Nombre}`}/>
          </div>
        <dl className={styles.datos}>
          <div className={styles.descripcion}>
          <dt>Info Contacto:</dt>
          <dd>{Link ? (<a className={styles.link} href={Link} target="_blank">{Nombre}</a>) : (Info)}</dd> 
        </div>
        </dl>
      </div>
    </article>
  );
};

export default CardContacto;
