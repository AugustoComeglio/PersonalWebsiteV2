import React from 'react'
import styles from './CardProyecto.module.css'

const CardProyecto = ({Nombre, Src, FechaInicio, FechaFin, Descrpcion, Links, Herramientas}) => {
  return (
    <article className={styles.card}>
        <header className={styles.header}>
            <div className={styles.title}>{Nombre}</div>
        </header>
        <div className={styles.bodyCard}>
            <div className={styles.contimg}>
                <img src={Src} className={styles.img} alt={Nombre}></img>
            </div>
            <div className={styles.datos}>
                <div className={styles.descripcion}>
                    <p>{Descrpcion}</p>
                    <p>{FechaInicio} - {FechaFin}</p>
                </div>
                <div className={styles.Links}>
                    {Links.map((link) => (<a className={styles.link} href={link.Link} target="_blank">{link.Nombre}</a>))}
                </div>
                <div className={styles.herramientas}>
                    {Herramientas.map((herramienta) => (
                        <div className={styles.herramienta}>
                            <img src={herramienta.Src} className={styles.imgherramienta}></img>
                            <div className={styles.imgnombre}>{herramienta.Nombre}</div>
                        </div>))}
                </div>
            </div>
        </div>   
    </article>
  )
}

export default CardProyecto
