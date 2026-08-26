export function EstadoSesion({ estado }) {
    // Retorno temprano si esta cargando 
    if (estado === 'cargando'){
        return <p> Cargando sesión ...</p>
    }

    // Evaluacion con switch para el resto de estados 
    const obtenerEtiqueta = () => {
        switch (estado) {
            case 'autenticado':
                return <span style={{color: 'green'}}>🟢 Sesión activa</span>;
            case 'invitado':
                return <span style={{color: 'orange'}}>🟡 Modo invitado</span>;
            case 'error':
                return <span style={{color: 'red'}}>🔴 Error de conexión</span>;
            default:
                return <span>⚪ Estado desconocido</span>
        }
    };

    return(
        <div>
            Estado actual: {obtenerEtiqueta()}
        </div>
    )
}