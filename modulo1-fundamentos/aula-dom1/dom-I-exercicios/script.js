const frutas = ["laranja", "limão", "uva"];

// Exercicio1
// const fruta1 = document.getElementById("fruta-1")
// fruta1.innerHTML = frutas[0]

// const fruta2 = document.getElementById("fruta-2")
// fruta2.innerHTML = frutas[1]

// const fruta3 = document.getElementById("fruta-3")
// fruta3.innerHTML = frutas[2]

for(let i=1; i<4; i++){
    document.getElementById("fruta-"+i).innerHTML = frutas[i-1]
}

// Exercicio2
let frutaNova
const imprimirValorImput = () => {
    frutaNova = document.getElementById("nova-fruta").value
    console.log(frutaNova)
}

// Exercicio3
const adicicionarItensNoMonitor = () => {

        if(frutas.length === 3){
            frutas.push(frutaNova)
            const fruta4 = document.getElementById("fruta-4")
            fruta4.innerHTML = frutas[3]
            console.log(frutas)
        }else{
            frutas.push(frutaNova)
            let lista = document.getElementById("lista-de-frutas")
            lista.innerHTML += `<li class='nova-fruta'> ${frutaNova} </li>`
            console.log(frutas)
        }
}
