// PRATICA GUIADA
/*const estudante = {
    nome: "Vinicius",
    sobrenome: "Oliveira",
    matricula: 32481,
    notasDoSemestre: [10, 9, 5]
}

estudante.modulo = "Módulo 1"
estudante['professor'] = "Clara"

console.log(estudante)
console.log(estudante.nome)
console.log(estudante['notasDoSemestre'][1])
console.log(estudante.modulo)

const novoEstudante = {
    ...estudante,
    nome: "Astrodev",
    notasDoSemestre: [...estudante.notasDoSemestre, 9], //espalhamentofeito no array de objetos
}
novoEstudante.nome = "AstroDev"
novoEstudante.modulo = "Módulo 2"
console.log(novoEstudante)

//criar um array com dois estudantes
const estudantesLabenu = []
estudantesLabenu.push(estudante)
estudantesLabenu.push(novoEstudante)
console.log(estudantesLabenu)
*/


// EXERCÍCIO DE FIXAÇÃO

const carrinho = {
    nome: "Larissa",
    forma: "Cartão",
    endereco: "Av. do Café"
}

carrinho.compras = [
    {
        nome:"Papel Higiênico", 
        preco: 52, 
        quantidade: 1, 
        unidades: 40
    },
    {nome:"Cotonete", preco: 10, quantidade: 2, unidades: 100},
    {nome:"Detergente", preco: 18, quantidade: 1, unidades: 6}
]

console.log(carrinho)
console.log(`Quantidade de itens no carrinho:${carrinho.compras.length}`)

const carrinhoPresente = {
    ...carrinho,
    nome: "Rodrigo",
    compras: [...carrinho.compras],
    forma: "Cartão de Presente"
}

carrinhoPresente.compras.push(
    {nome:"Chocolate", preco: 20, quantidade:1, unidades: 3}
)

console.log(carrinhoPresente)
console.log(`Quantidade de itens no carrinho:${carrinhoPresente.compras.length}`)
