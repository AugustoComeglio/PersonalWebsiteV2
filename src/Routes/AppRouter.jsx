import { Navigate, Route, Routes } from "react-router";
import Home from "../Components/Screens/Home/Home"
import Aptitudes from "../Components/Screens/Aptitudes/Aptitudes"
import Contacto from "../Components/Screens/Contacto/Contacto"
import Cursos from "../Components/Screens/Cursos/Cursos"
import Educacion from "../Components/Screens/Educacion/Educacion"
import Experiencia from "../Components/Screens/Experiencia/Experiencia"
import Herramientas from "../Components/Screens/Herramientas/Herramientas"
import Idiomas from "../Components/Screens/Idiomas/Idiomas"
import Proyectos from "../Components/Screens/Proyectos/Proyectos"

const AppRouter = () => {
  return (
    <Routes>
        <Route path="" element={<Navigate to="home" />} />
        <Route path="/" element={<Navigate to="home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/aptitudes" element={<Aptitudes />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/educacion" element={<Educacion />} />
        <Route path="/experiencia" element={<Experiencia />} />
        <Route path="/herramientas" element={<Herramientas />} />
        <Route path="/idiomas" element={<Idiomas />} />
        <Route path="/proyectos" element={<Proyectos />} />
    </Routes>
  )
}

export default AppRouter
