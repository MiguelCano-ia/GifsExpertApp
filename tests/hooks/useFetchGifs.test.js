import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('Pruebas en el custom hook useFeychGifs', () => {
  test('debe de regresar el estado inicial', () => {

    const { result } = renderHook( () => useFetchGifs('Valorant'));
    const { images, isLoading } = result.current;

    expect( images.length ).toBe(0);
    expect( isLoading ).toBe(true);
  });

  test('debe de retornar un arreglo de imagenes y isLoading en false', async () => {

    const { result } = renderHook( () => useFetchGifs('Valorant'));

    //* Esperate hasta que suceda lo de abajo
    await waitFor(
      () => expect( result.current.images.length).toBeGreaterThan(0)
    );

    const { images, isLoading } = result.current;

    expect( images.length ).toBeGreaterThan(0);
    expect( isLoading ).toBeFalsy();
  });
});
