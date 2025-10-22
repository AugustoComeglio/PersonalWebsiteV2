import React from 'react'
import styles from './CardPresentacion.module.css'

const CardPresentacion = () => {
  return (
    <article className={styles.card}>
        <header className={styles.header}>
            <div className={styles.title}>Auguto Comeglio</div>
            <div className={styles.profesion}>Estudiante de Ingenieria en Sistemas de Información - SSR RPA Developer</div>
        </header>
        <div className={styles.bodyCard}>
             <div className={styles.contimg}>
            <img src="/Images/Augusto.jpg" className={styles.img} alt="Foto de perfil de Augusto Comeglio"></img>
        </div>
            <div className={styles.datos}>
                <section className={styles.descripcion}>
                    <h3>Acerca de mí</h3>
                    <p>Soy un estudiante avanzado de Ingeniería en Sistemas de Información en la Universidad Tecnológica Nacional, apasionado por la tecnología y el desarrollo de software. Actualmente, me desempeño como RPA Developer en CTRL365, donde he adquirido experiencia en automatización de procesos y desarrollo de soluciones tecnológicas eficientes.</p>
                    <h3>Experiencia y Habilidades</h3>
                    <p>A lo largo de mi formación y experiencia profesional, he desarrollado una sólida base en varias áreas clave:</p>
                    <ul>
                        <li><b>Desarrollo de RPA: </b>Experto en la creación e implementación de soluciones de automatización de procesos utilizando herramientas como Blue Prism.</li>
                        <li><b>Programación: </b>Competente en diversos lenguajes de programación, incluyendo Java, JavaScript, HTML, CSS, Angular, Python, SQL, React.js.</li>
                        <li><b>Análisis de Sistemas: </b>Habilidad para analizar y optimizar sistemas de información para mejorar la eficiencia y productividad.</li>
                        <li><b>Trabajo en Equipo: </b>Experiencia colaborando con equipos multidisciplinarios para lograr objetivos comunes.</li>
                    </ul>
                    <h3>Objetivos Profesionales</h3>
                    <p>Mi objetivo es continuar desarrollándome en el campo de la ingeniería en sistemas de información, especializándome en la automatización de procesos y la innovación tecnológica. Aspiro a contribuir significativamente al éxito de proyectos y empresas tecnológicas, utilizando mis habilidades para crear soluciones eficientes y efectivas.</p>
                </section>
            </div>
        </div>
    </article>
  )
}

export default CardPresentacion
