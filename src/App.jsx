function App(){
  //Usar variables dentro de JSX
  const nombre = 'Ana'
  const curso = 'React'
  const edad = 25


  return (

    <div>
      <h1> Hola, {nombre}</h1>
      <h1>Estas tomando el Curso de Intro a {curso}</h1>
      <p>Tienes {edad} años</p>
      <p>El proximo año tendras {edad +1 } años</p> 
      <button>Comenzar</button>
    </div>
    // Podemos hacer operaciones 
  )
}

export default App