import React, { useEffect } from 'react';
import './Planeta.css';

// Componente hijo que se monta y desmonta dinámicamente desde App.jsx
// cada vez que la nave "aterriza" en un nuevo planeta (ver handleAterrizar en App.jsx).
// Sirve para observar en la consola las dos fases más importantes del ciclo de vida
// de un componente: el MONTAJE (cuando aparece por primera vez) y el DESMONTAJE
// (cuando React lo quita del DOM).
function Planeta({ nombre }) {
  useEffect(() => {
    // FASE DE MONTAJE
    // Este bloque se ejecuta una sola vez, justo después de que el componente
    // se renderiza por primera vez (o cuando cambia "nombre", ya que está en las dependencias).
    console.log(`¡El planeta ${nombre} ha aparecido!`);

    // FASE DE DESMONTAJE (función de limpieza / cleanup)
    // React ejecuta esta función automáticamente antes de quitar el componente
    // del DOM, o justo antes de volver a ejecutar el efecto si "nombre" cambia.
    return () => {
      console.log(`¡El planeta ${nombre} ha desaparecido!`);
    };
  }, [nombre]); // Se vuelve a ejecutar solo si cambia el nombre del planeta

  return (
    <div className="planeta-card">
      🪐 <strong>{nombre}</strong>
    </div>
  );
}

export default Planeta;
