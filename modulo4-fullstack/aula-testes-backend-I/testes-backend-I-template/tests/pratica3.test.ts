import { pratica3 } from "../src/pratica3";

describe("Testes da pratica3.ts", () => {
  test("Verificar se a função recebe dois números e retorna um objeto com duas propriedades soma e multiplicação", () => {
    const result = pratica3(3, 5);

    const expectedResult = {
      sum: 8,
      mult: 15,
    };

    expect(result).toEqual(expectedResult);
  });
});
