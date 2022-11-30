// # Exercício 1

// Crie uma função que receba uma const numérica qualquer. Crie um `if` para verificar se o número guardado na const é **par**. Caso seja, a função deve retornar a mensagem: "o número é par". Após imprima o retorno no console.

function numPar (num){
    if(num%2 === 0 ){
        return `O número ${num} é par`;
    }else{
        return `O número ${num} é ímpar`
    }
}

console.log(numPar(52))