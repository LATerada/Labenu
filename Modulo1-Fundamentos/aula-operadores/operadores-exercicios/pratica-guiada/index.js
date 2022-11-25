console.log("HELLO WORLD!", " - OPERADORES - ")

//OPERADORES ARITMÉTICOS

/*let saldo = 15
saldo = saldo + 22.40
console.log("Total é", saldo)

saldo = saldo - 12.34
console.log("Total é", saldo)

saldo = saldo/3
console.log("Saldo após divisão com irmãos:",saldo.toFixed(2))

saldo = saldo*3.42
console.log(saldo.toFixed(2))

let res = saldo%3
saldo = saldo/3 + res

console.log(res.toFixed(2))
console.log("O saldo de cada irmão ficou:", saldo)
console.log("O dinheiro para o chicletinho é", res)


//MENOR E MAIOR

/*Crie duas variáveis, que guardem dois números. Utilizando somente os operadores >, <, >= e <=, faça as comparações e imprima na tela as seguintes mensagens:*/

/*const num1 = 7
const num2 = 5
let res

//O primeiro número é igual ao segundo? True/False

res = num1 == num2
console.log("num1 == num2 ", res)

/*O primeiro número é menor ou igual ao segundo? True/False*/

/*res = num1 <= num2
console.log("num1 <= num2 ", res)

/*O primeiro número é maior que o segundo? True/False*/

/*res = num1 > num2
console.log("num1 > num2 ", res)

/*O primeiro número é menor que o segundo? True/False*/

/*res = num1 < num2 
console.log("num1 < num2 ", res)

//LÓGICO

/* Afirmativas abaixo são verdadeiras ou falsas para a construção de diversos cenários.*/

const p1 = "Qual é a sua idade?"
const p2 = "Qual é a idade do(a) seu(sua) melhor amingo(a)"
let idade
let idadeAmigo 

idade = Number(prompt(p1))
idadeAmigo = Number(prompt(p2))

console.log("Sua idade é maior do que a do seu melhor amigo?")
let r1
r1 = idade > idadeAmigo
console.log(r1)

let comparaçao
comparaçao = idade - idadeAmigo
console.log("A diferença de idade é de:", comparaçao)

console.log(typeof idade, typeof idadeAmigo)

//EXERCICIO FIXACAO

let a = "vou para a praia!"
let b = "sou maior de idade"
let c = "posso tomar uma cervejinha"
let d = "quero passear de carro"

r1 = !b && d 
r2 = (b && a)&&!d
r3 = (a || d)
r4 = c && !d

console.log(r1, r2, r3, r4)