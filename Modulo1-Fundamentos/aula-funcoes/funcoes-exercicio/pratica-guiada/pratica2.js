/*Crie uma função que receba um número como parâmetro e:
verifique se ele é par
Some com o número 10
multiplique por ele mesmo
Retorne `o número ${numero} é par? ${verifica}. Somado com 1O o resultado é ${soma} e multiplicado por ele mesmo é  ${multiplica}`
Extra: Refaça o exercício com a sintaxe de expressão de função
*/

function pratica2 (num){
    const numero = num 
    const verifica = num % 2 === 0
    const soma = num +10
    const multiplica = num*num
    console.log(`o número ${numero} é par? ${verifica}. Somado com 1O o resultado é ${soma} e multiplicado por ele mesmo é  ${multiplica}`)

}

pratica2 (15)