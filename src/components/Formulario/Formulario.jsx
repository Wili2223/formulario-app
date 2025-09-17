import React, { useState } from 'react';
import './Formulario.css';


function Formulario() {
  
  // 1. Hook de estado para manejar los datos del formulario.
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    password: '',
    edad: '',
    masculino: false,
    femenino: false,
    mensaje: '',
  });

  // 2. Hook de estado para manejar el color de fondo.
  const [backgroundColor, setBackgroundColor] = useState('');

  // 3. Función para manejar los cambios en los inputs.
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // 4. Función para manejar el envío del formulario.
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Datos enviados:\n${JSON.stringify(formData, null, 2)}`);
    setFormData({
      nombre: '',
      email: '',
      password: '',
      edad: '',
      masculino: false,
      femenino: false,
      mensaje: '',
    });
  };

  // 5. Función para cambiar el color de fondo.
  const changeBackgroundColor = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    setBackgroundColor(randomColor);
  };

  // 6. El JSX (HTML) del componente.
  return (
    <main className="content" >

      <form id="form-ejemplo" onSubmit={handleSubmit} style={{ backgroundColor: backgroundColor}}>
        
        <label htmlFor="nombre" style={{ color: 'blue' }}>Nombre</label>
        <input
          id="nombre"
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
        />

        <label htmlFor="email">Gmail</label>
        <input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <label htmlFor="password">Contraseña</label>
        <input
          id="password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />

        <label htmlFor="edad">Edad</label>
        <input
          id="edad"
          type="number"
          name="edad"
          value={formData.edad}
          onChange={handleChange}
        />

        <label htmlFor="masculino">M</label>
        <input
          id="masculino"
          type="checkbox"
          name="masculino"
          checked={formData.masculino}
          onChange={handleChange}
        />

        <label htmlFor="femenino">F</label>
        <input
          id="femenino"
          type="checkbox"
          name="femenino"
          checked={formData.femenino}
          onChange={handleChange}
        />

        <label htmlFor="mensaje">mensaje</label>
        <textarea
          id="mensaje"
          name="mensaje"
          value={formData.mensaje}
          onChange={handleChange}
        />

        <button type="submit">enviar</button>
        <button type="button" onClick={changeBackgroundColor}>Cambiar fondo</button>
      </form>
    </main>
  );
}

export default Formulario;