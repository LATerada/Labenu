// EXERCICIO 1
// let num = + (prompt(`Insira um número`))
// let resultadoSoma = 0

// while(num !== 0){
//     resultadoSoma = resultadoSoma + num
//     num = + (prompt(`Insira um número`))
// }
// console.log(resultadoSoma)


// EXERCICIO 2
// let i = 0
// let numero = +(prompt(`Insira um número`))

// for (let i = 0; i <= numero; i++){
//     console.log(i)
// }


// EXERCICIO 3
// const array = [5 ,3 ,8 ,5 ,1 ,6 ,9 ]
// //             0  1  2  3  4  5  6

// for (let i = 0; i < array.length; i++){
//     console.log (`O número do índice ${i} é ${array[i]}`)
// }
// console.log(`Fim do FOR`)


// EXERCICIO DE FIXACAO 1

// let tipoUsuario = prompt(`Digite seu tipo de usuário`).toUpperCase().trim()

// while(tipoUsuario !== `A`){
//     console.log(`Acesso negado`)
//     tipoUsuario = prompt(`Digite seu tipo de usuário`).toUpperCase().trim()
// }
// alert(`Bem-vindo, Admin`)


// EXERCICIO DE FIXACAO 2
// console.log(`TABUADA DO 2:`)
// for(let i = 0; i <= 10; i++){
//     console.log(`2 X ${i} = ${2 * i}`)
// }


// EXERCICIO DE FIXACAO 3
const array = [`Abelha`, `Bolacha`, `Chocolá`, `Dado`, `Elfa`]

for(let i = 0; i < array.length; i++){
    console.log(`String do índice ${i}: ${array[i].toUpperCase()}`)
}