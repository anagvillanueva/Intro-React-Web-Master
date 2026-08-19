import React, { useState, useEffect, useMemo } from 'react';
import { productosIniciales } from '../data/productos';

export function ListaFiltrable() {
const [busqueda, setBusqueda] = useState(''); // Lo que escribimos en el input
const [contadorInutil, setContadorInutil] = useState(0);
const [items] = useState(productosIniciales); // Los 5 mil productos

// Función pesada simulada
const operacionCostosa = (lista, termino) => {
    
    // Inicio de contador
    console.time('Tiempo de filtrado');
    
    let total = 0;
    for (let i = 0; i < 5000000; i++) { total += i; } // Simulación de carga intensa
    
    const resultado = lista.filter(item =>
    item.nombre.toLowerCase().includes(termino.toLowerCase())
    );

    console.timeEnd('Tiempo de filtrado');
    return resultado;
};

// useMemo: Solo se recalcula si cambia 'busqueda' o 'items'
const filtrados = useMemo(() => {
    console.log('[useMemo] Re-ejecutando filtrado pesado...');

    return operacionCostosa(items, busqueda);
}, [items, busqueda]); // Solo recalcula si ESTOS cambian

// useEffect: Auditamos cambios en los resultados filtrados
useEffect(() => {
    console.log('[useEffect] Filtrados actualizados:', filtrados.length);
}, [filtrados]);

return (
    <div>
    <h2>Lista Filtrable Optimizada</h2>
    
    <div>
        <input
        type="text"
        placeholder="Buscar producto..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        />

        <button 
        onClick={() => setContadorInutil(c => c + 1)}
        >
        Re-renderizar Componente ({contadorInutil})
        </button>
    </div>

    <p>Resultados encontrados: <strong>{filtrados.length}</strong> de {items.length}</p>

    <ul>
        {filtrados.slice(0, 30).map(item => (
        <li key={item.id}>{item.nombre} - {item.categoria} (${item.precio})</li>
        ))}
    </ul>
    </div>
);
}