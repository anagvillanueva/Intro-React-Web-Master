import { useEffect, useState } from "react";

export function CicloDeVida(){
    const [x, setX] = useState(0);

    // Fase 1) Componente ingresa al DOM (Nace)
    useEffect(()=>{
        console.log('1. Naci, ya ingrese al DOM')

        //Funcion de limpieza para cuando el componente muera 
        return() => {
            console.log('3. Mori, sali del DOM')
        };
    }, []); //Arreglo vacio = solo de montaje y desmontaje

    // Fase 2) Actualizacion re-render
    useEffect(()=>{
        console.log(`2. Crecio porque X cambio a ${x}`)

        return () =>{
            console.log ('Limpiar el efecto anterior antes de actualizar')
        };
    }, [x]); // Se ejecuta cuando la variable x cambie

    return (

        <div>
            <h2>Inspector del ciclo de vida</h2>
            <p>Valor de x <strong>{x}</strong></p>

            <button onClick={() => setX((prevX) => prevX +1 )}>
                Cambiar X (+1)
            </button>
        </div>
    )

}