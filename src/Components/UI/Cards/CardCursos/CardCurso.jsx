import React from "react";
import styles from "./CardCurso.module.css";
import { useNavigate } from "react-router-dom";

const CardCurso = ({
  Titulo,
  Institucion,
  SrcIstitucion,
  Expedicion,
  SrcCertificado,
  Status,
}) => {
  return (
      <article className={styles.card}>
        <header className={styles.header}>
          <div className={styles.title}>{Titulo}</div>
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
            <div className={styles.contimg}>
              <img className={styles.img} src={SrcIstitucion} title={Institucion} alt={`Logo de ${Institucion}`}/>
            </div>
          <dl className={styles.datos}>
            <div className={styles.descripcion}>
              <dt>Institución:</dt>
              <dd>{Institucion}</dd>
            </div>
            <div className={styles.descripcion}>
              <dt>Expedición:</dt>
              <dd>{Expedicion}</dd>
            </div>
            <div className={styles.descripcion}>
                <a
                  href={SrcCertificado}
                  target="_blank"
                  className={`${Status === "In Progress" ? styles.aInprogress : styles.aDone}`}>
                  <b>Ver Certificado</b>
                </a>
            </div>
          </dl>
        </div>
      </article>
  );
};

export default CardCurso;
