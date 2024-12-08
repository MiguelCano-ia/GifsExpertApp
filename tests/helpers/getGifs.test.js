import { getByTitle } from "@testing-library/react";
import { getGifs } from "../../src/helpers/getGifs"

describe('Pruebas en getGifs()', () => {
  test('debe retornar un arreglo de gifs', async () => {
    
    const gifs = await getGifs('Valorant');

    expect( gifs.length ).toBeGreaterThan( 0 );

    // En la primera posicion del arreglo de espera...
    expect( gifs[0] ).toEqual({
      id: expect.any( String ),
      title: expect.any( String ),
      url: expect.any( String ),
    })
  });
});
