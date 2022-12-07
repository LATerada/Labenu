// // PRATICA GUIADA

// function multiplicarPor3(array){
//   const novoArray = []
//   for(let elemento of array){
//     novoArray.push(elemento * 3)
//   }
//   return novoArray
// }

// const retornarPares = (array) => {
//   const numerosPares = []
//   for(let elemento of array){
//     if(elemento%2 === 0){
//       numerosPares.push(elemento)
//     }
//   }
//   return numerosPares
// }

// const arrayNumeros = [1,2,3,4,5,6,7,8,9,10]
// const arrayNumeros2 = [4,7,3,8,9,2]
// // console.log(`Multiplica array1:
// // ${multiplicarPor3(arrayNumeros)}`)
// // console.log(`Multiplica array2:
// // ${multiplicarPor3(arrayNumeros2)}`)
// // console.log(`Retorna pares array1:
// // ${retornarPares(arrayNumeros)}`)
// // console.log(`Retorna pares aray2:
// // ${retornarPares(arrayNumeros2)}`)

// // Em seguida, crie uma função que deve receber como parâmetros um array e uma função. O corpo da função deve chamar a função callback, passando o array argumento e guardando o valor do novo array em uma variável. Em seguida, esta função vai imprimir os valores do novo array no console.

// function imprimir(array,callBack){
//   const novoArray = callBack (array)
//   console.log(`Dentro da funcao imprimir: ${novoArray}`)
// }

// // imprimir(arrayNumeros,multiplicarPor3)
// // imprimir(arrayNumeros,retornarPares)

// // as funcoes de callback sao resolvidas antes da funcao pai. No exemplo acima, a chamada do callBack se da para construir o novoArray 

// function multiplicarPor3map(array){
//   const novoArray = array.map((elemento) => {
//     return elemento * 3
//   })
//   return novoArray
// }
// console.log(multiplicarPor3(arrayNumeros))
// // callBack nao nomeada:
// // () =>{}

// // reescrevendo de forma mais simplificada a funcao acima
// function multiplicarPor3map(array){
//   return array.map((elemento) => elemento * 3)
// }
// const novoArray = multiplicarPor3map(arrayNumeros)
// console.log(`novo array ${novoArray}`)

// // Refaça o item “A segunda deve receber um array de números, e retornar um array apenas com os números pares”, dessa vez utilizando a função filter()

// // function retornarParesFilters(array){
// //   const novoArray = array.filter((elemento) => {
// //     if(elemento % 2 === 0){
// //       return elemento
// //     }
// //   })
// //   return novoArray
// // }

// function retornarParesFilters(array){
//   return array.filter((elemento) => elemento % 2 === 0)
// }

// console.log(retornarParesFilters(arrayNumeros2))
// console.log(imprimir(arrayNumeros2,retornarParesFilters))
// //is undefined, arrumar


// EXERCICIO DE FIXACAO
// Com o array de pokémons do template, faça o seguinte:
// Crie uma função que receba como parâmetro o objeto pokémon, e que defina a propriedade vida do pokémon como 100;
// Crie uma constante pokemonsVidaCheia, e utilize a função de array map(), passando a função da letra A como argumento callback;
// Crie uma constante pokemonsDeFogo, e utilize a função de array filter(), passando uma função não-nomeada como argumento de callback, que deve retornar apenas os pokemons do tipo fogo.

const pokemons = [
  { nome: `Bulbasaur`, tipo: `grama`, vida: 40 },
  { nome: `Bellsprout`, tipo: `grama`, vida: 20 },
  { nome: `Charmander`, tipo: `fogo`, vida: 35 },
  { nome: `Vulpix`, tipo: `fogo`, vida: 25 },
  { nome: `Squirtle`, tipo: `água`, vida: 45 },
  { nome: `Psyduck`, tipo: `água`, vida: 25 },
]

function cura (pokemon){
  return {...pokemon, vida: 100}
}
console.log(pokemons)


const pokemonsVidaCheia = pokemons.map((pokemon) => {return cura(pokemon)})
console.log(pokemonsVidaCheia)


const pokemonsFogo = pokemons.filter((pokemon) => {return pokemon.tipo === `fogo`}) 
console.log(pokemonsFogo)