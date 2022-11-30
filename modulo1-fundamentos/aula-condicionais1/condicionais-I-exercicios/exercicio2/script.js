// # Exercício 2

// Escreva uma função que receba três valores. Uma idade, um booleano que responda se a pessoa terminou ou não o ensino médio, e um booleano que responda se a pessoa está cursando alguma faculdade.

// Crie um `if` para cada variável, checando as seguintes afirmacões:
// - Se a pessoa tem 18 anos ou mais;
// - Se a pessoa terminou o ensino médio;
// - Se a pessoa NÃO está cursando alguma faculdade;

// Crie um `if` que imprima que a afirmacão é verdadeira, e um `else` para imprimir que a afirmacão não é verdadeira.

// <details>

// <summary>Exemplo</summary>

// Caso a primeira pessoa tenha idade >=18:

// <b>"A pessoa é maior de idade"</b>

// e caso não seja:

// <b>"A pessoa é menor de idade"</b>

// </details>

let idade;
let isFormadaEnsioMedio;
let isCursandoFaculdade;

const descobrirperfil = (idade, isFormadaEnsioMedio,isCursandoFaculdade) => {
    if(idade >= 18){
        console.log(`A pessoa é maior de idade`)
    }else{
        console.log(`A pessoa é menor de idade`)
    };
    if(isFormadaEnsioMedio){
        console.log(`A pessoa terminou o ensino médio`)
    }else{
        console.log(`A pessoa ainda não terminou o ensino médio`)
    };
    if(!isCursandoFaculdade){
        console.log(`A pessoa não está cursando a faculdade`)
    }else{
        console.log(`A pessoa está cursando a faculdade`)
    };
}
descobrirperfil(15,true,false);