import { pratica2 } from "../src/pratica2";

describe("Testes da pratica2.ts", () => {
  test("Verificar se o dado de entrada é um number", () => {
    const result = pratica2("10" as any);

    expect(result).toBeNull();
  });

  test("Verificar se o número é inteiro", () => {
    const result = pratica2(10.3);

    expect(result).toBeNull();
  });

  test("Verificar se o dado de entrada é par", () => {
    const result = pratica2(10);

    expect(result).toBe(true);
  });

  test("Verificar se o dado de entrada é ímpar", () => {
    const result = pratica2(11);

    expect(result).toBe(false);
  }); //suites
});
