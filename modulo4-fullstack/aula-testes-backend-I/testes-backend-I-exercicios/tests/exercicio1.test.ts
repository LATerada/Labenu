import { exercicio1 } from "../src/exercicio1";

describe("Testes do exercicio1.ts", () => {
  test("Verifica se a entrada é string", () => {
    const result = exercicio1(50 as any);

    expect(result).toBeNull;
  });

  test("Verifica se a entrada é string valida", () => {
    const result = exercicio1("la" as any);

    expect(result).toBeNull;
  });

  test("Verifica se a saída esta correta", () => {
    const result = exercicio1("50");

    expect(result).toBe(50);
  });
});
