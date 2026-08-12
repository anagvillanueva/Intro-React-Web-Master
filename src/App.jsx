import { CicloRender } from './components/CicloRender';

function App(){
  return (
    <div>
      <h1>Ejemplo de Reactividad</h1>
      <CicloRender/>
    </div>
  )
}

export default App;

// En este ejemplo cada que se hace un re-render se vuelve a ejecutar la 
// la funcion completa desde el inicio, entonces vuelve a pasar por
// let variableNormal = 0 , por eso vuelve a valer 0 

// En cambio los valores creados con useState son conservados por React 
// entre renders (por eso existe useState para conservar info entre renders)