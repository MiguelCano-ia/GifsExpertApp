import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe('Pruebas en <GifExpertApp />', () => {
  test('no se debe agregar la misma categoria dos veces', () => {

    const category = 'Valorant';

    render(
      <GifExpertApp 
      />
    );

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input( input, { target: { value: category } });
    fireEvent.submit( form );

    expect( screen.getByText( category ) ).toBeTruthy();

    fireEvent.input( input, { target: { value: 'Sapo' } });
    fireEvent.submit( form );

    const items = screen.getAllByRole('heading', { level: 3});

    expect(items.length).toBe(2);
  });
});
