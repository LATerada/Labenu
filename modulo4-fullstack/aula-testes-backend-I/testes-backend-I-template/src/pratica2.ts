export const pratica2 = (n: number): boolean | null => {
  // recebe um numero
  // verifica se eé um number valido
  if (typeof n !== "number") {
    return null;
    // se nao for valido retorna null
  }
  // verifica de o numero é inteiro
  if (!Number.isInteger(n)) {
    return null;
    // se nao for inteiro retorna null
  }

  return n % 2 == 0;
  // retorna true se a divisao por 2 tem resto 0 e false se a divisao por dois tem resto diferente de 0
};
// retora true se a divisao por 2 tem resto 0 e false se a divisao por dois tem resto diferente de 0
