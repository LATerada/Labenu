

//PARTE #1

let nome 
let idade

console.log(typeof nome)
console.log(typeof idade)

/* undefined, pois não foi atibuido nenhum valor 
a variável */

const yourName = prompt("What's your name?")
let yourAge = prompt("How old are you?")

console.log("Hello,",yourName, "you are", yourAge, "years old")

console.log(typeof yourName)
console.log(typeof yourAge)

/*a variável yourAge tem valor de String, pois vem 
do comando prompt que só permite valores de sring
apesar de idade ser um valo numérico */

//DICA: para imprimir mais de um valor na mesma linha
//console.log(valor1, valor2


//PARTE #2

const p1 = "Você é casado?"
const p2 = "Você tem filhos?"
const p3 = "Você pretende ter filhos?"

let r1 = prompt(p1)
let r2 = prompt(p2)
let r3 = prompt(p3)

console.log(p1 ,"-",r1)
console.log(p2, "-",r2)
console.log(p3, "-",r3)