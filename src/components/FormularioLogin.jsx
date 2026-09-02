import React, {useRef, useState} from 'react';
import './FormularioLogin.css';

export function FormularioLogin({onLogin}){
    // 1. Crear las referencias con useRef
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);

    //Estado reactivo solo para msj con error de la UI
    const [errorMsg, setErrorMsg] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); // Evitamos que la pagina se recarge (Full Page Reload)

        // 2. Acceder al valor actual ingresando los elementos del DOM
        const username = usernameRef.current.value.trim();
        const password = passwordRef.current.value.trim();

        // Validamos si falta algun dato
        if(!username){
            setErrorMsg('El usuario es obligatorio para iniciar sesión ⚠️')
            usernameRef.current.focus(); //Colocamos el foco directamente con la refencia
            return;
        }

        if(!password){
            setErrorMsg('Ingresa tu contraseña para iniciar sesión ⚠️')
            passwordRef.current.focus(); //Colocamos el foco directamente con la refencia
            return;
        }

        // Liampiamos errores y enviamos el usuario autenticado al componente Padre
        setErrorMsg('');
        onLogin(username);
    };

    const handleLimpiar = () => {
        // Manipulacion directa del DOM con useRef
        usernameRef.current.value = '';
        passwordRef.current.value = '';
        setErrorMsg('');
        usernameRef.current.focus(); // Devuelve el cursor al primer campo
    }

    return (
        <section className="formulario-login">
            <h2>Iniciar Sesión en la Nave</h2>

            {errorMsg && <p className="mensaje-error">{errorMsg}</p>}

            <form onSubmit={handleSubmit} className="formulario-login-form">
                <div className="campo-login">
                    <label htmlFor="username">Usuario Espacial:</label>
                    <input
                    id="username"
                    ref={usernameRef}
                    type="text"
                    placeholder="Ej anita.gv27" />
                </div>

                <div className="campo-login">
                    <label htmlFor="password">Clave Secreta:</label>
                    <input
                    id="password"
                    ref={passwordRef}
                    type="password"
                    placeholder="********"/>
                </div>

                <div className="acciones-login">
                    <button type="submit" className="btn-ingresar">Ingresar al Panel</button>
                    <button type="button" className="btn-limpiar" onClick={handleLimpiar}>Limpiar</button>
                </div>
            </form>
        </section>
    )
}
