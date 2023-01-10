//Criando um elemento:
const item0 = document.createElement("li");

const item5 = document.createElement("li")

//Criando o conteudo do elemento:
contentItem0 = document.createTextNode("Item 0");

contentItem5 = document.createTextNode("Item 5")

//Colocando o conteudo no elemento:
item0.appendChild(contentItem0);

item5.appendChild(contentItem5);

//Buscando uma div como referencia:
const lista = document.getElementById("lista")

//Adicionando o elemento no DOM em relacao a referencia.
lista.insertAdjacentElement("afterbegin", item0)
lista.insertAdjacentElement("beforeend",item5)