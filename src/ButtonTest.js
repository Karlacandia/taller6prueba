
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Boton from './Boton';

test('muestra el texto correcto y cambia al hacer click', () => {

  const { getByText } = render(<Boton />);


  const boton = getByText(/Hacer click aquí/i);
  expect(boton).toBeInTheDocument();

 
  fireEvent.click(boton);

 
  expect(getByText(/¡Gracias por hacer click!/i)).toBeInTheDocument();
});
