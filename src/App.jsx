import React, { useState, useEffect, useMemo, useRef } from 'react';
import Planeta from './components/Planeta';
import './App.css';

// Este componente es un ejemplo práctico del CICLO DE VIDA de un componente en React,
// combinando las 3 fases (montaje, actualización y desmontaje) mediante useEffect,
// junto con useMemo (memorización de valores) y useRef (referencias al DOM).
function App() {
  // ==========================================
  // ESTADOS DEL PANEL DE CONTROL (TALLER BASE)
  // ==========================================
  const [distancia, setDistancia] = useState(0);
  const [combustible, setCombustible] = useState(100);
  const [estadoNave, setEstadoNave] = useState("En órbita");
  const [planetasVisitados, setPlanetasVisitados] = useState([]);

  // ==========================================
  // ESTADOS Y REFS DE LA BITÁCORA (RETO FINAL)
  // ==========================================
  const [bitacora, setBitacora] = useState(() => {
    const guardados = localStorage.getItem('planetas');
    return guardados ? JSON.parse(guardados) : [];
  });
  const [nombreForm, setNombreForm] = useState('');
  const [descripcionForm, setDescripcionForm] = useState('');
  const [imagenForm, setImagenForm] = useState(null);
  const inputImagenRef = useRef(null);

  // 1. FASE DE MONTAJE (array de dependencias vacío [])
  // Este efecto se ejecuta UNA sola vez, justo después del primer renderizado,
  // igual que "componentDidMount" en un componente de clase.
  // Aquí arrancamos un intervalo que simula el vuelo de la nave (avanza distancia
  // y consume combustible cada segundo).
  useEffect(() => {
    console.log("¡El panel de control está listo!");

    const intervalo = setInterval(() => {
      setDistancia((prevDist) => prevDist + 10);
      setCombustible((prevComb) => (prevComb > 0 ? prevComb - 1 : 0));
    }, 1000);

    // FASE DE DESMONTAJE (cleanup)
    // Si el componente App se quitara del DOM, React ejecutaría esto
    // para liberar el intervalo y evitar fugas de memoria.
    return () => {
      clearInterval(intervalo);
      console.log("El panel de control se ha apagado.");
    };
  }, []);

  // 2. FASE DE ACTUALIZACIÓN
  // Al incluir [combustible] como dependencia, este efecto NO se ejecuta en cada
  // render, sino solo cuando el valor de "combustible" cambia respecto al render anterior.
  useEffect(() => {
    console.log("¡Combustible actualizado!");
  }, [combustible]);

  // 3. FASE DE ACTUALIZACIÓN (persistencia)
  // Cada vez que "bitacora" cambia, se guarda automáticamente en localStorage
  // para que los planetas registrados no se pierdan al recargar la página.
  useEffect(() => {
    localStorage.setItem('planetas', JSON.stringify(bitacora));
  }, [bitacora]);

  // 4. useMemo: MEMORIZACIÓN DE UN VALOR CALCULADO
  // Evita reconstruir el string "mensajeEstado" en cada render; solo se
  // recalcula cuando "estadoNave" cambia.
  const mensajeEstado = useMemo(() => {
    return `Estado: ${estadoNave}`;
  }, [estadoNave]);

  // ACCIÓN DE ATERRIZAR: agrega un nuevo planeta a la lista,
  // lo que provoca que React MONTE un nuevo <Planeta /> (ver Planeta.jsx)
  const handleAterrizar = () => {
    const nuevoPlaneta = `Planeta-${planetasVisitados.length + 1}`;
    setEstadoNave("Aterrizando");
    setPlanetasVisitados([...planetasVisitados, nuevoPlaneta]);
  };

  // MANEJO DEL FORMULARIO DE LA BITÁCORA
  const handleSubmitBitacora = (e) => {
    e.preventDefault();

    const entradaPlaneta = {
      nombre: nombreForm,
      descripcion: descripcionForm,
      imagen: imagenForm ? URL.createObjectURL(imagenForm) : null,
    };

    setBitacora([...bitacora, entradaPlaneta]);
    setNombreForm('');
    setDescripcionForm('');
    setImagenForm(null);

    if (inputImagenRef.current) {
      inputImagenRef.current.value = '';
    }
  };

  // ELIMINAR DE LA BITÁCORA
  const handleDeleteBitacora = (index) => {
    const copia = [...bitacora];
    copia.splice(index, 1);
    setBitacora(copia);
  };

  return (
    <div className="app-container">
      <h1>🚀 Explorador Espacial</h1>

      {/* PANEL DE CONTROL: muestra el estado en vivo actualizado por los useEffect de arriba */}
      <section className="panel-control">
        <h2>Panel de Control</h2>
        <p><strong>{mensajeEstado}</strong></p>
        <p>📡 Distancia recorrida: {distancia} km</p>
        <p>⛽ Combustible: {combustible}%</p>
        <div className="combustible-barra">
          <div
            className={`combustible-progreso ${combustible <= 20 ? 'bajo' : ''}`}
            style={{ width: `${combustible}%` }}
          />
        </div>

        <button
          onClick={handleAterrizar}
          disabled={combustible === 0}
          className="btn-aterrizar"
        >
          🛬 Aterrizar
        </button>
      </section>

      {/* LISTA DE PLANETAS VISITADOS (DEMO DE MONTAJE/DESMONTAJE) */}
      {/* Cada elemento aquí es un componente <Planeta /> distinto que se MONTA */}
      {/* al aterrizar. Si se quitara de la lista, React lo DESMONTARÍA (ver Planeta.jsx) */}
      <section className="seccion-planetas">
        <h3>Planetas en Órbita Cercana ({planetasVisitados.length})</h3>
        <div className="grid-planetas">
          {planetasVisitados.map((planeta, index) => (
            <Planeta key={index} nombre={planeta} />
          ))}
        </div>
      </section>

      <hr className="separador" />

      {/* RETO FINAL: BITÁCORA DE EXPLORACIÓN (formulario controlado + localStorage) */}
      <section>
        <h2>📖 Bitácora de Exploración</h2>

        <form onSubmit={handleSubmitBitacora} className="formulario-bitacora">
          <input
            type="text"
            placeholder="Nombre del planeta"
            value={nombreForm}
            onChange={(e) => setNombreForm(e.target.value)}
            required
          />
          <textarea
            placeholder="Descripción detallada..."
            value={descripcionForm}
            onChange={(e) => setDescripcionForm(e.target.value)}
            required
          />
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImagenForm(e.target.files[0])}
            ref={inputImagenRef}
          />
          <button type="submit" className="btn-guardar">Guardar en Bitácora</button>
        </form>

        <h3>Planetas Registrados</h3>
        {bitacora.length === 0 ? (
          <p>No hay planetas guardados aún.</p>
        ) : (
          <ul className="lista-bitacora">
            {bitacora.map((item, index) => (
              <li key={index} className="item-bitacora">
                <h4>{item.nombre}</h4>
                <p>{item.descripcion}</p>
                {item.imagen && (
                  <img src={item.imagen} alt={item.nombre} className="imagen-bitacora" />
                )}
                <br />
                <button
                  onClick={() => handleDeleteBitacora(index)}
                  className="btn-eliminar"
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

export default App;