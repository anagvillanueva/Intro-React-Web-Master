import { UsuarioSaludo } from './components/UsuarioSaludo'

function App() {
  const estaLogeado = true;
  const usuario = "Ana";

  return ( 
    <div style={{ padding: '20px', fontFamily: 'sans-serif'}}>
      <h1>Proyecto de Autenticación</h1>
      <UsuarioSaludo
      estaLogeado={estaLogeado}
      username={usuario}
      mensajeNoLeido={0}
      />
    </div>
  );
}

export default App;