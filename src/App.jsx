import { useState} from 'react';
import {Routes, Route, useNavigate, Navigate, Link} from 'react-router-dom';
import { UsuarioSaludo } from './components/UsuarioSaludo';
import {Tarjeta} from './components/Tarjeta';
import {EstadoSesion} from './components/EstadoSesion';
import {FormularioLogin} from './components/FormularioLogin'
import { VistaPerfil } from './components/VistaPerfil';
import { Navbar } from './components/Navbar';
import './App.css';



//Componente para proteger rutas privadas 
function RutaProtegida({estaAutenticado, children}){
  if(!estaAutenticado){
    return <Navigate to="/login" replace/>;
  }
  return children;
}

//Vista Error 404
function Pagina404(){
  return(
    <div className="pagina-404">
      <h2>404</h2>
      <p>Te has perdido en el espacio profundo, esta ruta no existe</p>
      <Link to="/" className="btn-volver">Volver a la Base</Link>
    </div>
  )
}

function App() {
  const [usuario, setUsuario] = useState(null);
  const navigate = useNavigate();

  const handleLoginExitoso = (nombreIngresado) => {
    setUsuario(nombreIngresado)
    //Redireccion con ruta dinamica 
    navigate(`/perfil/${nombreIngresado}`);
  };

  const handleCerrarSesion = () => {
    setUsuario(null);
    navigate('/login');
  };

  return (
      <div className="app-container">
        <h1>Explorador Espacial</h1>

        <Navbar usuario={usuario} onLogout={handleCerrarSesion} />

        <Routes>
          <Route
            path ="/"
            element= {
              <div className="pantalla-inicio">
              <h2> Bienvenido a la Central del Explorador Espacial</h2>
              <p>Utiliza el menu superior para acceder a tu pamel</p>
              </div>
            }
            />

            <Route 
            path="/login"
            element={
              usuario ? <Navigate to={`/perfil/${usuario}`} replace /> : <FormularioLogin onLogin={handleLoginExitoso}/>
            }
            />

            {/*Ruta protegida dinamica */}
            <Route 
            path="/perfil/:username"
            element={
              <RutaProtegida estaAutenticado={Boolean(usuario)}>
                <VistaPerfil/>
              </RutaProtegida>
            }
            />

            {/*Manejo de rutas inexistentes */}
            <Route path="*" element={<Pagina404/>}/>

            </Routes>
            </div>
  );

}
export default App;