import React, { useState } from 'react';
import axios from 'axios';

const BuscarAlumnos = () => {
  const [carnet, setCarnet] = useState('');
  const [resultadoAlumno, setResultadoAlumno] = useState(null);
  const [mensajeError, setMensajeError] = useState('');

  const handleBuscar = async () => {
    try {
      const respuesta = await axios.get(`https://api.example.com/alumnos/${carnet}`);
      setResultadoAlumno(respuesta.data);
      setMensajeError('');
    } catch (err) {
      setMensajeError('No se encontró el alumno con ese carnet');
      setResultadoAlumno(null);
    }
  };

  return (
    <div>
      <h2>Buscar Alumno por Carnet</h2>
      <input
        type="text"
        placeholder="Ingresa el número de carnet"
        value={carnet}
        onChange={(e) => setCarnet(e.target.value)}
      />
      <button onClick={handleBuscar}>Buscar Alumno</button>

      {mensajeError && <p style={{ color: 'red' }}>{mensajeError}</p>}
      {resultadoAlumno && (
        <div>
          <h3>Información del Alumno</h3>
          <p>Nombre: {resultadoAlumno.nombre}</p>
          <p>Curso Inscrito: {resultadoAlumno.curso}</p>
          <p>Calificación: {resultadoAlumno.nota}</p>
        </div>
      )}
    </div>
  );
};

export default BuscarAlumnos;