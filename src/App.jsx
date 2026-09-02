import { useState} from 'react';
import { UsuarioSaludo } from './components/UsuarioSaludo';
import {Tarjeta} from './components/Tarjeta';
import {EstadoSesion} from './components/EstadoSesion';
import {FormularioLogin} from './components/FormularioLogin'

function App() {
  const [estado, setEstado] = useState('invitado');
  const [username, setUsername] = useState('');

  const handleLoginExitoso = (nombreUsuario) => {
    setUsername(nombreUsuario);
    setEstado('autenticado');
  };

  const handleCerrarSesion = () => {
    setEstado('invitado');
    setUsername('');
  }

  return (
    <div className="panel-autenticacion">
      <h1>Panel de Autenticación</h1>

      {estado === 'invitado' ? (
        <FormularioLogin onLogin={handleLoginExitoso}/> ) : (
          <Tarjeta titulo="Perfil del Usuario">
            <EstadoSesion estado={estado} />
            <UsuarioSaludo 
              estaLogeado={estado === 'autenticado'} 
              username="Ana" 
              mensajeNoLeido={5} 
            />

          <button
          className="boton-alternar"
          onClick={handleCerrarSesion}>
          Cerrar Sesion Espacial 
        </button>
      </Tarjeta>
        )}
            </div>
  );
}

export default App;