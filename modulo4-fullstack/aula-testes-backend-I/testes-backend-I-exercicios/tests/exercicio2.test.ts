import { exercicio2 } from "../src/exercicio2";

describe("Testes do exercicio2.ts", () => {
  test("Verificar se a saída esta correta", () => {
    const result = exercicio2(new Date());

    const expectedResult = new Date().toLocaleDateString("pt-BR");

    expect(result).toBe(expectedResult);
  });
});
