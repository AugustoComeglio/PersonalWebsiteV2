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
    <>
      <div className={styles.card}>
        <div className={styles.conttitle}>
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
        </div>

        <div className={styles.contenedorInfo}>
          <div>
            <div className={styles.contimg}>
              <img className={styles.img} src={SrcIstitucion} />
            </div>
          </div>
          <div className={styles.datos}>
            <div className={styles.descripcion}>
              <b>Institución:</b> {Institucion}
            </div>
            <div className={styles.descripcion}>
              <b>Expedición:</b> {Expedicion}
            </div>
            <div className={styles.descripcion}>
                <a
                  href={SrcCertificado}
                  target="_blank"
                  className={`${Status === "In Progress" ? styles.aInprogress : styles.aDone}`}>
                  <b>Ver Certificado</b>
                </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardCurso;
