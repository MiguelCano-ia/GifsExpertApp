import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Pruebas en el componentes <GifItem />', () => {

  const title = 'Valorant'
  const url = 'https://valorant.com.co';

  test('deberia hacer match con el snapshot', () => {
    
    const { container } = render(
      <GifItem
        title={ title }
        url={ url } 
      />
    );
    expect( container ).toMatchSnapshot();
  });

  test('debe de mostar la imagen con el URL y el ALT indicado', () => {
    render(
      <GifItem
        title={ title }
        url={ url } 
      />
    );

    const image = screen.getByRole('img');
    expect( image.getAttribute('src') ).toBe( url );
    expect( image.getAttribute('alt') ).toBe( title );
  });
  

  test('debe de mostarar el titulo en el componente', () => {
    render(
      <GifItem
        title={ title }
        url={ url } 
      />
    );
    expect( screen.getByText( title ) ).toBeTruthy();
  });
});
