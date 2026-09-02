// Importamos la librería principal de React para poder crear componentes JSX.
import React from 'react';

// Importamos NavLink de react-router-dom.
// A diferencia de la etiqueta <a> de HTML (que recarga la página) o de <Link>, 
// NavLink sabe automáticamente si la ruta actual coincide con la URL del navegador 
// y nos permite aplicarle clases CSS de "activo" fácilmente.
import { NavLink } from 'react-router-dom';

/**
 * Componente de barra de navegación principal (Navbar).
 * 
 * @param {string|null} usuario - Recibe el nombre del usuario logeado o null/undefined si no hay sesión activa.
 * @param {function} onLogout - Función callback que se ejecuta cuando el usuario presiona el botón "Salir".
 */
export function Navbar({ usuario, onLogout }) {
  return (
    // Etiqueta semántica HTML <nav> con la clase CSS definida en App.css
    <nav className="navbar-espacial">
      
      {/* 
        Enlace a la página de inicio ('/').
        La propiedad `className` recibe una función arrow a la cual react-router-dom 
        le pasa un objeto con la propiedad `isActive`.
        Si el usuario está parado en la ruta '/', isActive será true y agregará la clase 'active'.
      */}
      <NavLink 
        to="/" 
        className={({ isActive }) => isActive ? "nav-link-espacial active" : "nav-link-espacial"}>
        Inicio
      </NavLink>

      {/* 
        Renderizado condicional con el operador lógico AND (&&):
        Si la variable 'usuario' TIENE un valor (es decir, el usuario inició sesión),
        entonces evalúa y renderiza el NavLink hacia su perfil. 
        Si 'usuario' es null o falso, no muestra nada.
      */}
      {usuario && (
        <NavLink 
          // Uso de Template Literals (backticks ``) para construir una ruta dinámica 
          // insertando el nombre del usuario directamente en la URL (ej. /perfil/ana).
          to={`/perfil/${usuario}`} 
          className={({ isActive }) => isActive ? "nav-link-espacial active" : "nav-link-espacial"}>
          Mi Perfil
        </NavLink>
      )}


      <div className="navbar-derecha">
        {usuario ? (
          <button onClick={onLogout} className="btn-eliminar btn-sin-margin">
            Salir ({usuario})
          </button>
        ) : (

          <NavLink 
            to="/login" 
            className={({ isActive }) => isActive ? "nav-link-espacial active" : "nav-link-espacial nav-link-login"}>
            Iniciar Sesión
          </NavLink>
        )}
      </div>
    </nav>
  );
}