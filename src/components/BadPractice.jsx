import React, {useState} from 'react';

export function BadPractice() {
    const [count, setCount] = useState(0);


    // ESTO SE EJECUTA EN CADA RENDERIZADO
    document.title =  `Contador: ${count}`;
    console.log ('Renderizando cuerpo del componente:', count);

    return(
        <div>
            <h3>Ejemplo de una mala practica sin useEffect</h3>
            <p>Contador: {count}</p>
            <button onClick={() => setCount (count + 1)}>
                Incrementar
            </button>
        </div>
    );
}