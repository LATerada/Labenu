//Declarando e selecionando um elemento do HTML:
const inputSenha = document.getElementById("password")

// Criando funcao para alterar o tipo do elemento input:
// Resolvendo o bug:
const escondeSenha = (event) => {
    event.preventDefault();
    inputSenha.setAttribute("type","password");
}

//Selecionando o elemento por classe:
// const formulario = document.getElementsByClassName("light")
const formulario = document.querySelector(".light")

//Removendo e adicionando uma classe ao elemento:
formulario.classList.add("dark")
formulario.classList.remove("light")