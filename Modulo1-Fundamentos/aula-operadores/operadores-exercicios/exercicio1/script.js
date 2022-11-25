
const p1= "Insira um número par"
const numeroPar = Number(prompt(p1))
let res = numeroPar%2

console.log("O resto da divisão do número", numeroPar, "por 2 é:", res)
console.log(res === 0)
console.log("Se o resultado foi true, o numero é par. Se o resultado foi false, o número inserido foi iímpar numero")

//independente do valor par inserido, o resto da divisao sempre sera 0.

// se for digitado um numero impar pelo usuario, a resposta da divisao sera 1, indicando que nao é um numero par. 
