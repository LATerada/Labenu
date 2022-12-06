// // DICA!
// // For of -> Iteração por Arrays(objeto, numeros, strings)
// // For in -> Iteração por Objetos

// // EXERCICIO PRATICA GUIADA
// const b1 = [8, 7, 8, 9]
// const b2 = [7, 8, 6, 9]
// const b3 = [10, 7, 10, 9]
// const b4 = [9, 7, 10, 10]
// const b5 = [10, 8, 9, 9]
// const nAno = [b1,b2,b3,b4,b5]

// // for(let i = 0; i < nAno.length; i++){
// //     let sum = 0
// //     let med = 0
// //     for(j = 0; j < nAno[i].length; j++){
// //         sum += nAno[i][j]
// //         med = sum/4
// //         // console.log(sum,med)
// //     }
// //     console.log(`A soma do Bimestre ${i +1} é ${sum} e a média é ${med}`)
// // }


// //altere o laco externo para "for...in"
// for(let b in nAno){
//     let sum = 0
//     let med = 0
//     for(j = 0; j < nAno[b].length; j++){
//         sum += nAno[b][j]
//         med = sum/4
//         // console.log(sum,med)
//     }
//     console.log(`A soma do Bimestre ${+(b) + 1} é ${sum} e a média é ${med}`)
// }

// // //altere o laco interno para "for...of"
// // for(let b in nAno){
// //     let sum = 0
// //     let med = 0
// //     for(let n of nAno[b]){
// //         sum += n
// //         med = sum/4
// //         // console.log(sum,med)
// //     }
// //     console.log(`A soma do Bimestre ${+(b) + 1} é ${sum} e a média é ${med}`)
// // }

// CHALLENGE
// Escreva uma função que recebe um ano de início e um ano de fim e imprime no console todas as sextas-feiras 13 entre o período. Exemplo: a entrada 2021, 2022 gera dois console.logs, 13 de agosto 2021 e 13 de maio de 2022.

// function sextaFeira13 (anoInicio,anoFim){
//     if(dia === sexta && dia ===13)
//     console.log()
// }

// nao finalizado