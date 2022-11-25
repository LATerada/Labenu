let p1 = "Nome Completo"
let p2 = "Data de Nascimento DD/MM/AAAA"
let p3 = "Endereço"
let p4 = "CPF"
let p5 = "Escolaridade"
let p6 = "Possui CNH?"
let p7 = "Quantos filhos possui"
let p8 = "Cargo atual"
let p9 = "Salário atual"
let p10 = "Recebe comissão?"
let p11 = "Ano de Admissão"

let nomeCompleto = prompt (p1)
let dataDeNascimento = prompt(p2)
let endereço = prompt(p3)
let cpf = Number(prompt(p4))
let escolaridade = prompt(p5)
let cnh = confirm(p6)
let filhos = Number(prompt(p7))
let cargo = prompt(p8)
let salario = Number(prompt(p9))
let recebeComissao = confirm(p10)
let anoDeAdmissão = Number(prompt(p11))

console.log(nomeCompleto)
console.log(dataDeNascimento)
console.log(endereço)
console.log(cpf)
console.log(escolaridade)
console.log(cnh)
console.log(filhos)
console.log(cargo)
console.log(salario)
console.log(recebeComissao)
console.log(anoDeAdmissão)
 
console.log(
    typeof nomeCompleto,
    typeof dataDeNascimento,
    typeof endereço,
    typeof cpf,
    typeof escolaridade,
    typeof cnh,
    typeof filhos,
    typeof cargo,
    typeof salario,
    typeof recebeComissao,
    typeof anoDeAdmissão
    )

console.log("O funcionário de nome, ", nomeCompleto, ", nascido em", dataDeNascimento, ", do documento,", cpf, "reside em", endereço ,
".É", cnh, "que possui carteira de habilitação. Possui", filhos,"filhos.", "Seu cargo atual é de",cargo,", salário de", salario, "reais, comissão de", 
recebeComissao,". O ano de admissão foi",anoDeAdmissão)