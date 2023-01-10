const mensagemParagrafo = document.getElementById("mensagem")

// Criando funcao
const checaCaps = (event) => {
    if(event.shiftKey){
        mensagemParagrafo.innerHTML += "ATENÇĀO: SEGURANDO SHIFT! "
    }else{
        mensagemParagrafo.innerHTML = ""
    }
}