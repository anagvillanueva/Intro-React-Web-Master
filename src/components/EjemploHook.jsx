import { useState} from 'react';

export function EjemploHook(){
    // Declaracion del estado 

    const [mensaje, setMensaje] = useState("Hola desde la memoria")

    return(
        <div>
            <p>{mensaje}</p>
            <button onClick={() => setMensaje ("El estado ha cambiado")}>
                Cambiar Mensaje
            </button>
        </div>
    )
}