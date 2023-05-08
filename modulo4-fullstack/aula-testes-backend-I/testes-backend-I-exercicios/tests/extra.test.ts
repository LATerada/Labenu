import { extra1 } from "../src/index";

describe("Teste extra1", () => {
  test("Verificar se a entrada está correta", () => {
    const result = extra1(12);

    expect(result).toBe("parâmetro inválido");
  });
  test("Verificar se a saida esta correta", () => {
    const result = extra1(1);

    expect(result).toBe("um");
  });
});
