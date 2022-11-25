//PARTE 1
const iA = 5 > 20 && 5 > 2
console.log(iA)

const iB = 5 == 5 || 5 == "5"
console.log(iB)

const iC = ! (20 > 50 || 20 > 60 )
console.log(iC)

//PARTE 2
const a = 45 //auxilio creche

const vendaJaneiro = 5784.50
const vendaFevereiro = 3418.41
const vendaMarco = 4124.10
const vendaAbril = 1874
const vendaMaio = 7000
const vendaJunho = 9459

const bJ = vendaJaneiro*0.1
const bF = vendaFevereiro*0.1
const bM = vendaMarco*0.1
const bA = vendaAbril*0.1
const bMai = vendaMaio*0.1
const bJu = vendaJunho*0.1

const salario = 2000

// 1 - O salário fixo mais o auxílio creche
const r1 = salario + a
console.log(r1)


// 2 - Quanto Fulano de Silva receberá de comissão em janeiro ( dica: para calcular 20% de algum valor fazemos o cálculo: valor*0.2)
console.log(bJ)


// 3 - Quanto Fulano de Silva será descontado em janeiro pelo INSS ( o valor a ser calculado deve levar em consideração o salário + porcentagem de vendas.)
r3 = (salario + bJ)*0.05
console.log(Number(r3.toFixed(2)))


// 4 Imprima no console o cálculo do salário de todos os meses com acréscimos e descontos.
const totalJ = salario + bJ + a - (salario + bJ)*0.05
console.log("Salário total de Janeiro com acréssimos e decrécimos: R$",Number(totalJ.toFixed(2)))

const totalF = salario + bF + a - (salario + bF)*0.05
console.log("Salário total de Fevereiro com acréssimos e decrécimos: R$",Number(totalF.toFixed(2)))

const totalM = salario + bM + a - (salario + bM)*0.05
console.log("Salário total de Março com acréssimos e decrécimos: R$",Number(totalM.toFixed(2)))

const totalA = salario + bA + a - (salario + bA)*0.05
console.log("Salário total de Abril com acréssimos e decrécimos: R$",totalA)

const totalMai = salario + bMai + a - (salario + bMai)*0.05
console.log("Salário total de Maio com acréssimos e decrécimos: R$",totalMai)

const totalJu = salario + bJu + a - (salario + bJu)*0.05
console.log("Salário total de Junho com acréssimos e decrécimos: R$",Number(totalJu.toFixed(2)))


// 5 - A média do salário em  seis meses (de janeiro a junho), levando em consideração as comissões e auxílio. 
const r5 = (totalJ + totalF + totalM + totalA + totalMai + totalJu)/6
console.log("A média salarial do mês de Janeiro até Junho, levando em consideração os valores salariais totais anteriores, foi de R$", Number(r5.toFixed(2)))