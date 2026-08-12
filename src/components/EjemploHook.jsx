import { useState} from 'react';

export function EjemploHook(){
    // Declaracion del estado 

    const [mensaje, setMensaje] = useState("Hola desde la memoria")
    // const [estado, setEstado] = useState(valorInicial);

    return(
        <div>
            <p>{mensaje}</p>
            <button onClick={() => setMensaje ("El estado ha cambiado")}>
                Cambiar Mensaje
            </button>
        </div>
    )
}

// Dentro de useState colocamos el valor inicial, puede ser: 
// useState(0)
// useState("")
// useState ("Hola")
// useState(false)