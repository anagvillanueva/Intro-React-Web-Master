import React from 'react';
import {NavLink} from 'react-router-dom';
import './Navbar.css';

export function Navbar ({usuario, onLogout}) {
    return (
        <nav className="navbar-espacial">
            {/*Enlace a la pagina de inicio ('/) */}
            <NavLink
                to="/"
                className={({isActive})=> isActive ? "nav-link-espacial active" : "nav-link-espacial"}>
                    Inicio
            </NavLink>
            {/*Si la variable usuario TIENE un valor, entonces evalua y renderiza el navlink hacia su perfil*/}
            {usuario && (
                <NavLink
                //Usamos backticks para construir la ruta dinamica, /perfil/ana
                    to={`/perfil/${usuario}`}
                    className={({isActive})=> isActive ? "nav-link-espacial active" : "nav-link-espacial"}>
                    Mi Perfil
                </NavLink>
            )}
            <div>
                {usuario ? (
                    <button onClick={onLogout}>Salir ({usuario})
                    </button>
                ):(
                    <NavLink
                    to="/login"
                    className={({isActive})=> isActive ? "nav-link-espacial active" : "nav-link-espacial"}>
                    Iniciar Sesión
                    </NavLink>
                )
            }
            </div>
        </nav>
    )
}