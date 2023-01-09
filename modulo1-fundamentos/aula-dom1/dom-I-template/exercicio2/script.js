let nome = document.getElementById("nome")
console.log(nome.value)

let endereco = document.getElementById("endereco")
console.log(endereco.value)

let email = document.getElementById("email")
console.log(email.value)

const cadastro = {
    nome: nome.value,
    endereco: endereco.value,
    email: email.value
}
console.log(cadastro)

const limparInputs = () => {
    nome.value = ""
    endereco.value = ""
    email.value = ""
}