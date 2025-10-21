import React from 'react'
import Header from '../../UI/Header/Header'
import Footer from '../../UI/Footer/Footer'
import styles from './Home.module.css'
import Title from '../../UI/Title/Title'
import CardPresentacion from '../../UI/Cards/CardPresentacion/CardPresentacion'



const Home = () => {
  return (
    <div className={styles.contPrincipal}>
    <Header/>
    <Title title="Home"/>
    <div className={styles.contenedor}>
      <CardPresentacion/>
    </div>
    <Footer/>
    </div> 
  )
}

export default Home
