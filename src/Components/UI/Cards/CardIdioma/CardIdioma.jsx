import React from 'react'
import styles from './CardIdioma.module.css'

const CardIdioma = ({Idioma, Src, Nivel}) => {
    return (
        <article className={styles.card}>
            <div  className={styles.contimg}>
                <img className={styles.img} src={Src} title={Idioma} alt={`Logo de ${Idioma}`}/> 
            </div>
            <div>
                <div className={styles.title}>{Idioma}</div>
                <div className={styles.descripcion}><b>Nivel: </b>{Nivel}</div>
            </div>
        </article>
    )
}

export default CardIdioma
