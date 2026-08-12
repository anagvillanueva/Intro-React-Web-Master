import { useState } from "react";

export function Contador() {

// Estado que guarda el valor actual del contador
const [contador, setContador] = useState(0);

// Función para aumentar el contador
const incrementar = () => {
    setContador(contador + 1);
};

// Función para disminuir el contador
const disminuir = () => {

    // Validamos que el contador no sea menor que 0
    if (contador > 0) {
    setContador(contador - 1);
    } else {
    alert("El contador no puede tener valores negativos");
    }
};

// Función para regresar el contador a 0
const resetear = () => {
    setContador(0);
};

return (
    <div>
    <h2>Contador con useState</h2>
    {/* 
        Si el contador es mayor o igual a 10,
        el texto cambia a rojo.
        Si no, permanece negro.
    */}
    <h1 style={{color: contador >= 10 ? "red" : "black"}}>
        {contador}
    </h1>

    {/* Botón para aumentar */}
    <button onClick={incrementar}>+1</button>
    {/* Botón para disminuir */}
    <button onClick={disminuir}>-1</button>
    {/* Botón para regresar a cero */}
    <button onClick={resetear}>Reset</button>

    </div>
);
}