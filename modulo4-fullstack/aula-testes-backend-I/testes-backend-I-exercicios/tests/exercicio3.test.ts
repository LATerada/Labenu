import { exercicio3 } from "../src/exercicio3";

describe("Testes do exercicio3.ts", () => {
  test("O estudante está em qual lista", () => {
    const result = exercicio3("Astrodev");

    const expectedResult = ["Math", "Tech"];

    expect(result).toEqual(expectedResult);
  });

  // test("", () => {
  //   const result = exercicio3("Astrodev");
  //   const result2 = exercicio3("Fulano");

  //   expect(result).toBe("Astrodev");
  //   expect(result2).toBeNull();
  // });
});
