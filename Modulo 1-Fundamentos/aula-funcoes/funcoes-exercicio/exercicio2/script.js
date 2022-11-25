/* Exercício 2
Declare e chame as funções abaixo:

a) Uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e imprima o resultado. Invoque a função e imprima no console o resultado.

b) Uma função que recebe 2 números e imprime um booleano que informa se o primeiro número é **maior ou igual** ao segundo.

c) Uma função que receba um número e imprima no console um boleano informando se o número é par ou não.

d) Uma função que receba um valor de salário e retorne o valor com o desconto 10% referente ao INSS.  
*/

//a
function exercicio2a (num1, num2){
    const soma = num1 + num2
    console.log (`A soma de ${num1} e ${num2} é igaul a ${soma}`)
}
exercicio2a(3,5)

 //b
 function exercicio2b (number1, number2){
    maiorOuIgual = number1 >= number2
    console.log(`O ${number1} é maiorou igual a ${maiorOuIgual}? ${maiorOuIgual}`)
 }
 exercicio2b(5,6)
 exercicio2b(6,5)

 //c
 function exercicio2c (num){
    const numPar = num % 2 === 0
    console.log(`O número ${num} é par? ${numPar}`)
 }
 exercicio2c (3)

 //d 
 function exercicio2d (salario){
    const salarioDes = salario - (salario*0,10)
 return `O salário descontado éde R$${salarioDes}`
 }
 console.log(exercicio2d (2000))




