import { fixacao } from "../src/fixacao";

describe("Testes para fixacao.ts", () => {
  test("Verificar se a entrada não é number", () => {
    const result = fixacao(10);

    expect(result).toBeNull;
  });

  test("Verificar se a entrada não é boleano", () => {
    const result = fixacao(true);

    expect(result).toBeNull;
  });

  test("Verificar se a saída da funcao esta correta", () => {
    const result = fixacao("text");

    const expectedResult = ["t", "e", "x", "t"];

    expect(result).toEqual(expectedResult);
  });
});
