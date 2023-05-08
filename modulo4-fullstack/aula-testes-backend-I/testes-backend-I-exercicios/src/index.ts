// EXTRAS

export const extra1 = (input: number): string | null => {
  if (input >= 1 && input <= 10) {
    if (input === 1) {
      return "um";
    } else if (input === 2) {
      return "dois";
    } else if (input === 3) {
      return "três";
    } else if (input === 4) {
      return "quatro";
    } else if (input === 5) {
      return "cinco";
    } else if (input === 6) {
      return "seis";
    } else if (input === 7) {
      return "sete";
    } else if (input === 8) {
      return "oito";
    } else if (input === 9) {
      return "nove";
    } else {
      return "dez";
    }
  } else {
    return "parâmetro inválido";
  }
};
console.log(extra1(12));

console.log(new Date().toString());
