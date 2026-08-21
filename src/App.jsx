import React from 'react';
import { useState } from 'react';
import { EjemplosEfectos } from './components/EjemplosEfectos';
import { ListaFiltrable } from './components/ListaFiltrable';
import { CicloDeVida } from './components/CicloDeVida'


export default function App() {
  const [mostrar, setMostrar] = useState(true);

  return (
    <div>
      <button onClick={() => setMostrar(!mostrar)}>
        {mostrar ? "Ocultar" : "Mostrar"}
      </button>

      {mostrar && <CicloDeVida />}
    </div>
  );
}