import React, {useState, useEffect} from 'react';

export function GoodPractice() {
    const [count, setCount] = useState(0);

    // SOLO se ejecuta cuando count cambia
    useEffect(()=>{
    document.title =  `Contador: ${count}`;
    console.log ('Efecto secundario ejecutado:', count);        
    }, [count]); // Dependencia 


    return(
        <div>
            <h3>Ejemplo correcto con useEffect</h3>
            <p>Contador: {count}</p>
            <button onClick={() => setCount (count + 1)}>
                Incrementar
            </button>
        </div>
    );
}