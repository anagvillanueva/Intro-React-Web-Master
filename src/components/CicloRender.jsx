import { useState } from 'react';

export function CicloRender(){
    let variableNormal = 0;
    const [estadoReactivo, setEstadoReactivo] = useState(0);


    // Variable normal cambia pero NO actualiza la pantalla
    const probarVariableNormal = () => {
        variableNormal += 1; 
        console.log("Variable normal cambio a:", variableNormal)
    };

    // Estado de React cuando cambia, actualiza la pantalla
    const probarEstadoReactivo = () => {
        setEstadoReactivo(estadoReactivo + 1)
    };

    return (

        <div>
            <h3> Demostracion de Reactividad</h3>
            <p> Variable Normal (consola): {variableNormal} </p>
            <button onClick={probarVariableNormal}>
                Sumar a variable normal
            </button>

            <hr />

            <p> Estado reactivo (pantalla): {estadoReactivo}</p>
            <button onClick={probarEstadoReactivo}>
                Sumar a Estado Reactivo
            </button>            
        </div>


    );
}