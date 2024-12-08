import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

//* Pasos para un mock de un CustomHook

//? 1.

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {

  const category = 'Valorant';

  test('Debe de mostrar el loading inicialmente', () => {

    //? 2
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });
    
    render(
      <GifGrid
        category={ category }
      />
    );

    expect( screen.getByText( 'Cargando...' ) );
    expect( screen.getByText( category ) );
  });

  test('debe mostrar items cuando se cargan las imagenes de useFetchGifs ', () => {
    
    const gifs = [
      {
        id: 'ABC',
        title: 'Valorant',
        url: 'https://localhost/valorant.jpg',
      },
      {
        id: 'ABCD',
        title: 'React',
        url: 'https://localhost/react.jpg',
      }
    ];

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: true,
    });

    render(
      <GifGrid
        category={ category }
      />
    );

    expect( screen.getAllByRole('img').length ).toBe(2);
  });
});
