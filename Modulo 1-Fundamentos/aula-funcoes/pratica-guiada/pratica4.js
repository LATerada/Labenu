/*Declare uma função que:
Receba um nome, um ano de nascimento e o ano  Atual 

Retorne uma string com um boleano true para se o usuário for maior de idade e false para se for menor de idade. 
A string retornada deve ter a seguinte mensagem:
“Fulano é maior de idade? true”
Chame a função duas vezes, passando como argumento nomes e anos de nascimento diferentes.
*/

// Function
function pratica4 (nome, anoNascimento, anoAtual){
    const diferenca = anoAtual - anoNascimento >= 18
    return`${nome} é maior de idade? ${diferenca}`
}

console.log(pratica4 ("Larissa", 1998, 2022))
console.log(pratica4 ("Sophia", 2010, 2022))

// Function com Prompt
function pratica4Prompt (nome, anoNascimento, anoAtual){
    const diferenca = anoAtual - anoNascimento >= 18
    return`${nome} é maior de idade? ${diferenca}`
}
    const nomeUsuario = prompt("Qual é o seu nome?")
    const anoNascimentoUsuario = Number(prompt("Qual é o seu ano de nascimento?"))
    const anoAtualUsuario = Number(prompt("Ano atual:"))

    console.log(pratica4Prompt(nomeUsuario, anoNascimentoUsuario, anoAtualUsuario))