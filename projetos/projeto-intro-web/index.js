//SEMANA 1
//item: Filmes

//const titulo = 
//const anoLancamento = 
//const nomeadoMelhorFilme = 

const titulo1 = "O REGRESSO"
const anoLancamento1 = 2015
const nomeadoMelhorFilme1 = true

const titulo2 = "MATRIX RESURRECTIONS"
const anoLancamento2 = 2021
const nomeadoMelhorFilme2 = false

const titulo3 = "LA LA LAND: CANTANDO ESTACOES"
const anoLancamento3 = 2016
const nomeadoMelhorFilme3 = true

const mediaAnos = (anoLancamento1 + anoLancamento2 + anoLancamento3)/3
    console.log(mediaAnos.toFixed(0))

const nomeadosMelhorFilme = nomeadoMelhorFilme1 && nomeadoMelhorFilme2 && nomeadoMelhorFilme3
    console.log(nomeadosMelhorFilme)

//const atoresPrincipais = 

const atoresPrincipais1 = ["Leonardo DiCaprio", "Tom Hardy", "Domhnall Gleeson"]
const atoresPrincipais2 = ["Keanu Reeves", "Carrie-Anne Moss", "Hugo Weaving"]
const atoresPrincipais3 = ["Emma Stone", "Ryan Gosling", "John Legend"]

console.log(`${titulo1}

Ano de Lancamento: ${anoLancamento1}
Nomeado ao Oscar? ${nomeadoMelhorFilme1}
Atores principais: ${atoresPrincipais1}`)

console.log(`${titulo2}

Ano de Lancamento: ${anoLancamento2}
Nomeado ao Oscar? ${nomeadoMelhorFilme2}
Atores principais: ${atoresPrincipais2}`)

console.log(`${titulo3}

Ano de Lancamento: ${anoLancamento3}
Nomeado ao Oscar? ${nomeadoMelhorFilme3}
Atores principais: ${atoresPrincipais3}`)