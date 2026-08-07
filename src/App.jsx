import Producto from './components/Producto'
import TarjetaPerfil from './components/TarjetaPerfil'
import './App.css'

function App(){

  return (
    <div>
      <TarjetaPerfil
      nombre="Ana Villanueva"
      profesion="Ingeniera en Computacion"
      ciudad="Ciudad de Mexico"
      />

      <TarjetaPerfil
      nombre="Victor Ramirez"
      profesion="Diseñador UI UX"
      ciudad="Monterrey"
      />

    </div>

  )
}

export default App