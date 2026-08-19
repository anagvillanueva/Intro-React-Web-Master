import React from 'react';
import { EjemplosEfectos } from './components/EjemplosEfectos';
import { ListaFiltrable } from './components/ListaFiltrable';

export default function App() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', fontFamily: 'sans-serif', padding: '20px' }}>
      <h1>Lista Filtros</h1>
      <ListaFiltrable />
    </div>
  );
}