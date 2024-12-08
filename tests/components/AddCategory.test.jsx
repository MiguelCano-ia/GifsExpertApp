import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('Pruebas es <AddCategory />', () => {
  test('debe de cambiar  ', () => {
    
    render(
      <AddCategory
        onNewCategory={ () => {} } 
      />
    );

    const input = screen.getByRole('textbox');
    fireEvent.input( input, { target: { value: 'Valorant' }} );
    
    expect( input.value ).toBe('Valorant');
  });

  test('debe llamar onNewCategory si el input tiene un valor', () => {
    
    //* Estamos evaluando el comportamiento como tal.

    const inputValue = 'Valorant';
    const onNewCategory = jest.fn();

    render(
      <AddCategory
        onNewCategory={ onNewCategory } 
      />
    );

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input( input, { target: { value: inputValue }} );
    fireEvent.submit( form );
    expect( input.value ).toBe('');

    //* Que haya sido llamada solo 1 vez
    expect( onNewCategory ).toHaveBeenCalledTimes(1);
    //* Llamada con el valor de la caja de texto
    expect( onNewCategory ).toHaveBeenCalledWith( inputValue );
  });

  test('no debe llamar onNewCategory si el input no tiene un valor', () => {
    
    const onNewCategory = jest.fn();

    render(
      <AddCategory 
        onNewCategory={ onNewCategory }
      />
    );

    const form = screen.getByRole('form');
    fireEvent.submit( form );

    expect( onNewCategory ).not.toHaveBeenCalled();
  });
});
