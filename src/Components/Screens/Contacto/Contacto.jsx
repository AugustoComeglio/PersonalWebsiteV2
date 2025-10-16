import React from 'react'
import Header from '../../UI/Header/Header'
import Footer from '../../UI/Footer/Footer'
import styles from './Contacto.module.css'
import Msj from '../../UI/Msj/Msj'
import Title from '../../UI/Title/Title'

const Contacto = () => {
  return (
    <div className={styles.contPrincipal}>
    <Header/>
    <Title Title="Contacto"/>
    <div className={styles.contenedor}>
      <Msj/>
    </div>
    <Footer/>

    </div> 
  )
}

export default Contacto
