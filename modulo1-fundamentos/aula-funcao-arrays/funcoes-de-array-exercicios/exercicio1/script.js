// # Exercício 1

// Crie duas funcões que recebem como parâmetro um objeto (o objeto está pronto no arquivo JS).
// 1. A primeira deve retornar o objeto, alterando as propriedades dele para que os **valores** deste objeto fiquem em CAIXA ALTA.
// saída esperada:

// `{ nome: 'ASTRODEV', profissao: 'DEV DAS ESTRELAS', username: 'ASTRODEV_LABENU', senha: 'MELHORDETODOS'}`

// 2. A segunda deve retornar os valores do objeto como texto corrido.

// 3. Em seguida, crie uma funcão que recebe o objeto e um callback como parâmetros. A funcão deve passar o objeto como argumento da funcão de callback, e em seguida imprimir o valor retornado.

// Chame a funcão 3, passando como argumentos o objeto passado no arquivo `script.js`, e a funcão 1.
// Repita o processo para a funcão 2

const objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}

// TENTATIVA CRIANDO UM NOVO OBJETO
function retornarValorEmCaixaAlta(objeto){
  let novoObjeto = {...objeto}
  for(let i in novoObjeto){
    novoObjeto[i] = novoObjeto[i].toUpperCase()
  }
  return novoObjeto
}
console.log(retornarValorEmCaixaAlta(objeto))

// function retornarValorEmCaixaAlta(){
//   for (let i in objeto){
//     objeto[i] = objeto[i].toUpperCase()
//   }
//   return objeto
//   }
// console.log(retornarValorEmCaixaAlta(objeto))
 
const retornarTextoCorrido = (objeto) => {
  let texto = ``
  for(let i in objeto){
    texto += objeto[i] + ` `
  }
  return texto
}
console.log(retornarTextoCorrido(objeto))

function imprimir (obj, callback){
  const novoNovoObjeto = callback(obj)
  return novoNovoObjeto
}
console.log(imprimir(objeto,retornarValorEmCaixaAlta))
console.log(imprimir(objeto,retornarTextoCorrido))