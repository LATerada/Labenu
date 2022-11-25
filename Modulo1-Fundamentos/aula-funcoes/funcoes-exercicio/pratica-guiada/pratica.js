// Função
function praticaNormal (nome){
    console.log(`Olá ${nome}`)
}
 
// Função Arrow
const praticaArrow = (nome) => {
    console.log(`Olá ${nome}`)
}

// Função Arrow Reduzida
const praticaArrowSlim = (nome) => console.log(`Olá ${nome}`)

// Prática com return
const praticaComReturn = (nome) => {
    return `Olá ${nome}`
}

praticaNormal ("Rodrigo")
praticaArrow ("Denise")
praticaArrowSlim ("Artur")
console.log(praticaComReturn("Teste"))