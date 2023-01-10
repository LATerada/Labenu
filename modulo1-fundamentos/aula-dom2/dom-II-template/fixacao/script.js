// Criando item li:
// Salvando o valor do input:
// Adicionando valor do input ao item li:
// newItem.appendChild(meuInput.innerHTML)
// nao esta dando certo com o appenchild


// Chamando o elemento pai referencia:
const lista = document.getElementById("lista")

// Funçāo para adicionar item ao monitor: 
const insereItem = (event) => {
    event.preventDefault()

    const newItem = document.createElement("li")
    const meuInput = document.getElementById("meu-input").value;
    newItem.innerHTML = meuInput
    lista.insertAdjacentElement("beforeend", newItem)

    document.getElementById("meu-input").value = ""
}