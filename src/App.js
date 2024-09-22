import React, { useState } from 'react';
import NuevoCurso from './NuevoCurso';
import BuscarAlumnos from './BuscarAlumnos';

const App = () => {
  const [vistaActual, setVistaActual] = useState('nuevoCurso');

  return (
    <div className="App">
      <h1>Gestión de Cursos y Alumnos</h1>
      <div>
        <button onClick={() => setVistaActual('nuevoCurso')}>Crear Nuevo Curso</button>
        <button onClick={() => setVistaActual('buscarAlumnos')}>Buscar Alumnos</button>
      </div>

      {vistaActual === 'nuevoCurso' ? <NuevoCurso /> : <BuscarAlumnos />}
    </div>
  );
};

export default App;