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

function sextaFeira13 (ano1,ano2){

    const data = {
        ano: [ano1,ano2],
        mes: [`Janeiro`, `Fevereiro`,`Março`, `Abril`,`Maio`,`Junho`,`Julho`,`Agosto`,`Setembro`,`Outubro`,`Novembro`,`Dezembro`],
        dias: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
        semana: [0,1,2,3,4,5,6],
    }
    
    if(ano1 > ano2){
        diferencaAnos = ano1 - ano2
        menorAno = ano2
    }else{
        diferencaAnos = ano2 - ano1
        menorAno = ano1
    }

    for(i = 1; i < diferencaAnos; i++){
        novoAno = menorAno + i
        data.ano.push(novoAno)
    }
    data.ano.sort()

    for(i = 0; i < data.ano.length; i++){
        for(j = 0; j < data.mes.length; j++){
            for(k = 0; k < data.dias.length; k++){
                let testeData = new Date ([data.ano[i]],[j],[k])
                if(testeData.getDate() === 13 && testeData.getDay() === 5){
                    console.log(`Dia ${[k]} de ${data.mes[j]} de ${data.ano[i]} é uma SEXTA-FEIRA 13!`)
                }
            }
        }
    }
}
sextaFeira13(2021,2022)