// // IFS ANINHADOS
// let idadeDependente = 13

// if (idadeDependente >= 13){
//     if(idadeDependente <=17){
//         console.log(`Seu dependente já pode ter um cartão de crédito vinculado ao seu`)
//     }else{
//         console.log(`O limite de idade é 17 anos`)
//     }
// }else{
//     console.log(`Para ter o cartão, o dependente precisa ter entre 13 e 17 anos.Consulte outras possibilidades do Labank`)
// }

// // IFS COM OPERADORES LÓGICOS

// if (idadeDependente>13 && idadeDependente<17){
//     console.log(`Seu dependente já pode ter um cartão de crédito vinculado ao seu`)
// }else{
//     console.log(`Para ter o cartão, o dependente precisa ter entre 13 e 17 anos.Consulte outras possibilidades do Labank`)
// }

// // IF TERNÁRIO

// idadeDependente === 13 ? console.log(`A idade do dependente é 13 e já pode ter um cartão`): console.log(`Verifique as opções possíveis`)

// // console.log("Resposta: "+(idade==13?"A idade do dependente é 13 e ja pode ter um cartão":"Verifique as opções possíveis"))

// // SWITCH-CASE

// let ramalEscolhido = +(prompt(`Digite um numero de 1 a 4 para escolher o cartão`))
// let cartao
// switch(ramalEscolhido){
//     case 1:
//         cartao = `Fácil`
//     break
//     case 2:
//         cartao =`Black`
//     break
//     case 3:
//         cartao =`Platinum`
//     break
//     case 2:
//         cartao =`Master Gold`
//     break
//     default:
//         cartao = `Escolha umas das quatro opções disponiveis`
// }
// console.log(`Cartão ${cartao}`)

// PRÁTICA GUIADA
// // IF ANINHADO

//    let numero = +(prompt(`Digite um número`))

//     if(numero%2 === 0){
//         if(numero%3 === 0){
//         console.log(`Divisível por 2 e por 3.`)
//          switch(numero){
//             case 6:
//                 console.log(`O número digitado foi 6`)
//             break;
//             case 12:
//                 console.log(`O número digitado foi 12`)
//             break;
//             case 18:
//                 console.log(`O número digitado foi 18`)
//             break;
//             case 24:
//                 console.log(`O número digitado foi 24`)
//             break;
//             case 30:
//                 console.log(`O número digitado foi 30`)
//             break
//             default:
//                 console.log(`O número é maior que 30 ou menor que 6`)
//             break
//             }
//         }
//     }

//     }else{
//         console.log(`Não divisível por 2 e por 3.`)
//     }
// adicionei o Switch no primeiro exercicio para testar ele dentro do if aninhado

// // IF COM OPERADORES

//    let numero = +(prompt(`Digite um número`))

//     if (numero%2 ===0 && numero%3 === 0){
//         console.log(`Divisível por 2 e por 3.`)
//     }else{
//         console.log(`Não divisível por 2 e por 3.`)
//     }

// SWICH-CASE

    let numero = +(prompt(`Digite um número`))

    if (numero%2 ===0 && numero%3 === 0){
        console.log(`Divisível por 2 e por 3.`);
        numero === 30 
            ? console.log(`Acertei!`)
                : console.log(`Não foi dessa vez :(`)
        switch(numero){
            case 6:
                console.log(`O número digitado foi 6`)
            break
            case 12:
                console.log(`O número digitado foi 12`)
            break
            case 18:
                console.log(`O número digitado foi 18`)
            break
            case 24:
                console.log(`O número digitado foi 24`)
            break
            case 30:
                console.log(`O número digitado foi 30`)
            break
            default:
                console.log(`O número é maior que 30 ou menor que 6`)
            break
        }
    }else if (numero%2 ===0 || numero%3 === 0){
        console.log(`Divisível por 2 ou por 3.`);
    }else{
        console.log(`Não divisível por 2 e por 3.`)
    }