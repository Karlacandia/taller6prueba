
import React, { useState } from 'react';

const Boton = () => {
  const [texto, setTexto] = useState('Hacer clic aquí');

  const manejarClick = () => {
    setTexto('¡Gracias por hacer clic!');
  };

  return (
    <button onClick={manejarClick}>
      {texto}
    </button>
  );
};

export default Boton;
