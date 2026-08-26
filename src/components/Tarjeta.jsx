import './Tarjeta.css'

export function Tarjeta({ titulo, children}){
    return (
        <div className="tarjeta">
            {titulo && <h3 className="tarjeta-titulo">{titulo}</h3>}

            {/*Imprime todo lo que se pase dentro de <Tarjeta>...</Tarjeta> */}

            <div className="tarjeta-contenido">{children}</div>
        </div>
    )
}
