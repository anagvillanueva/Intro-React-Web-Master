export function UsuarioSaludo({estaLogeado, username, mensajeNoLeido}){
    return(
        // Usar el operador ternario para alterar entre 2 estados
        <div>
            {estaLogeado ? (
                <h2>Bienvenido de nuevo, {username}</h2>
            ) : (
                <h2>Por favor, inicia sesión para continuar</h2>
            )}
        
            
            {estaLogeado && mensajeNoLeido > 0 && (
                    <p>Tienes {mensajeNoLeido} mensajes sin leer.</p>
            )}
            {/*Uso del operador && para mostrar información si cumple una condición*/}
        </div>
    );
}