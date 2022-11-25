/*a)Crie 4 funções, cada uma deve receber dois parâmetros numéricos e retornar o valor de uma das operações básicas (soma, subtração, multiplicação e divisão).

b) Em seguida, fora das funções, receba do usuário dois números e armazene em variáveis.

c) Invoque cada uma das 4 funções, passando como argumento os dois números recebidos do usuário.

d) Por fim, crie variáveis para receber o retorno de cada uma das funções e imprima o resultado das operações no console.
*/

function exercicio3a1 (num1,num2){
    const soma = num1 + num2
    return `Soma de ${num1} e ${num2} é igual a ${soma}`
}

function exercicio3a2 (num1,num2){
    const sub = num1 - num2
    return `A diferença de ${num1} e ${num2} é igual a ${sub}`
}

function exercicio3a3 (num1, num2){
    const multi = num1 * num2
    return `A multiplicaçao de ${num1} e ${num2} é igual a ${multi}`
}

function exercicio3a4 (num1, num2){
    const divi = num1 / num2
    return `A divisão de ${num1} e ${num2} é igual a ${divi.toFixed(2)}`
}

const num1 = Number(prompt("Digite um número"))
const num2 = Number (prompt ("Digite outro número"))

console.log (exercicio3a1 (num1,num2))
console.log (exercicio3a2 (num1,num2))
console.log (exercicio3a3 (num1,num2))
console.log (exercicio3a4 (num1,num2))