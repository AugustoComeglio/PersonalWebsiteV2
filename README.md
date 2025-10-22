# Mi Sitio Web Personal
Este proyecto es una aplicación web de página única (SPA) desarrollada con React y Vite, diseñada para funcionar como un portafolio personal. El sitio presenta información sobre mi experiencia profesional, educación, cursos realizados, habilidades técnicas y formas de contacto.

## Características
- Navegación Dinámica: Utiliza react-router-dom para una navegación fluida y sin recargas entre las diferentes secciones del sitio.
- Diseño Responsivo: La interfaz se adapta a diferentes tamaños de pantalla para una experiencia de usuario óptima en cualquier dispositivo.
- Componentes Reutilizables: La interfaz de usuario está construida con componentes modulares y reutilizables para facilitar el mantenimiento y la escalabilidad.
- Tema Oscuro y Claro: Incluye un interruptor para que los usuarios puedan elegir entre un tema claro y uno oscuro, mejorando la accesibilidad y la preferencia del usuario.
- Carga de Datos Dinámica: La información de las secciones como experiencia, educación y cursos se carga dinámicamente desde archivos JSON, lo que facilita la actualización de los contenidos.

## Tecnologías Utilizadas
Este proyecto fue construido utilizando las siguientes tecnologías:

- React: Biblioteca de JavaScript para construir interfaces de usuario.
- Vite: Herramienta de desarrollo frontend que proporciona un entorno de desarrollo rápido y un paquete de producción optimizado.
- React Router DOM: Para la gestión de rutas en la aplicación.
- CSS Modules: Para escribir estilos CSS que se aplican localmente a los componentes, evitando conflictos de nombres.
- ESLint: Para el análisis estático del código, ayudando a encontrar y corregir problemas en el código JavaScript.
- Netlify: Para el despliegue y alojamiento de la aplicación.

## Estructura del Proyecto
El proyecto sigue una estructura organizada para separar las diferentes partes de la aplicación:
```bash
/src
|-- /Components 
|   |-- /Screens # Componentes de página (Home, Contacto, etc.)
|   |-- /UI      # Componentes reutilizables (Botones, Cards, etc.)
|-- /Context     # Contexto de React (ThemeContext)
|-- /Routes      # Configuración de rutas (AppRouter)
|-- App.jsx      # Componente principal de la aplicación
|-- main.jsx     # Punto de entrada de la aplicación
```
## Primeros Pasos
Para ejecutar este proyecto localmente, sigue estos pasos:

### Prerrequisitos
Asegúrate de tener Node.js instalado en tu máquina.

### Instalación
#### Clona el repositorio:

```git clone https://github.com/tu-usuario/tu-repositorio.git```
#### Navega al directorio del proyecto:
```cd tu-repositorio```

#### Instala las dependencias:
```npm install```

### Ejecutando la Aplicación
Para iniciar la aplicación en modo de desarrollo, ejecuta el siguiente comando:
```pm run dev```
Esto iniciará el servidor de desarrollo de Vite y podrás ver la aplicación en tu navegador en http://localhost:5173.