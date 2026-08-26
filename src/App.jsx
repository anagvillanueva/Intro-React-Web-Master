import { useState} from 'react';
import { UsuarioSaludo } from './components/UsuarioSaludo';
import {Tarjeta} from './components/Tarjeta';
import {EstadoSesion} from './components/EstadoSesion';

function App() {
  const [estado, setEstado] = useState('autenticado');

  return (
    <div className="panel-autenticacion">
      <h1>Panel de Autenticación</h1>

      <Tarjeta titulo="Perfil del Usuario">
        <EstadoSesion estado={estado} />
        <UsuarioSaludo 
          estaLogeado={estado === 'autenticado'} 
          username="Ana" 
          mensajeNoLeido={5} 
        />
        
        <button
          className="boton-alternar"
          onClick={() => setEstado(estado === 'autenticado' ? 'invitado' : 'autenticado')}>
          Alternar Estado
        </button>
      </Tarjeta>
    </div>
  );
}

export default App;