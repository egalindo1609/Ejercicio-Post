import React, { useState } from 'react';
import axios from 'axios';

const NuevoCurso = () => {
  const [cursoData, setCursoData] = useState({
    nombreCurso: '',
    cantidadCreditos: '',
    descripcionCurso: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCursoData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const curso = {
      nombre: cursoData.nombreCurso,
      creditos: parseInt(cursoData.cantidadCreditos),
      descripcion: cursoData.descripcionCurso
    };

    try {
      const respuesta = await axios.post('https://test-deploy-12.onrender.com/cursos', curso);
      console.log('Curso enviado correctamente:', respuesta.data);
      setCursoData({ nombreCurso: '', cantidadCreditos: '', descripcionCurso: '' });
    } catch (error) {
      console.error('Hubo un problema al enviar el curso:', error);
    }
  };

  return (
    <div>
      <h2>Formulario para agregar un nuevo curso</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre del Curso:</label>
          <input
            type="text"
            name="nombreCurso"
            value={cursoData.nombreCurso}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Créditos:</label>
          <input
            type="number"
            name="cantidadCreditos"
            value={cursoData.cantidadCreditos}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Descripción:</label>
          <input
            type="text"
            name="descripcionCurso"
            value={cursoData.descripcionCurso}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Guardar Curso</button>
      </form>
    </div>
  );
};

export default NuevoCurso;