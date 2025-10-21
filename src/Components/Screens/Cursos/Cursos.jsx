import Header from '../../UI/Header/Header'
import Footer from '../../UI/Footer/Footer'
import Title from '../../UI/Title/Title'
import { useState, useEffect } from "react";
import styles from './Cursos.module.css'
import CardCurso from '../../UI/Cards/CardCursos/CardCurso'

const Cursos = () => {

  const [cursos, setCurso] = useState([]);
  
    useEffect(() => {
      fetch("/Data/Cursos.json")
        .then((res) => res.json())
        .then((data) => setCurso(data))
        .catch((error) => console.error("Error al cargar JSON:", error));
    }, []);

  return (
    <div className={styles.contPrincipal}>
    <Header/>
    <Title title="Cursos"/>
    <div className={styles.contenedor}>
      {cursos.map((i) => (
          <CardCurso
            key={i.id}
            Titulo={i.Titulo}
            Institucion={i.Institucion}
            SrcIstitucion={i.SrcIstitucion}
            Expedicion={i.Expedicion}
            SrcCertificado={i.SrcCertificado}
            Status={i.Status}
          />
        ))}
    </div>
    <Footer/>
    </div> 
  )
}

export default Cursos
