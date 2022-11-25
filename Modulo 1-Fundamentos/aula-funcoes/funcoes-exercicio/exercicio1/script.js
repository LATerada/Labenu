/*a) Declare uma função que imprima `Olá, [SEU NOME]!`. Chame esta função.

b) Declare uma função que receba um número como parâmetro imprima no console a tabuada do dele. Chame esta função várias vezes com números diferentes.

c) Comente as funções criadas acima, e reescreva-as utilizando expressões de função, ou __arrow functions__ 
*/

// a
function imprimirOlaNome (nome) {
   console.log(`Olá, ${nome}!`);
}
imprimirOlaNome ("Larissa")

// b
function tabuada1Ao10 (numero){
    const tabuada1 = numero*1
    const tabuada2 = numero*2
    const tabuada3 = numero*3
    const tabuada4 = numero*4
    const tabuada5 = numero*5
    const tabuada6 = numero*6
    const tabuada7 = numero*7
    const tabuada8 = numero*8
    const tabuada9 = numero*9
    const tabuada10 = numero*10
    console.log(tabuada1,tabuada2,tabuada3,tabuada4,tabuada5,tabuada6,tabuada7,tabuada8,tabuada9)
}
tabuada1Ao10 (20)

// c 
    //a
    const imprimirOlaNome2 = (nome) => console.log (`Olá, ${nome}!`);
    imprimirOlaNome2 ("Larissa")

    //b
    const tabuada1Ao102 = (numero) => {
        const tabuada1 = numero*1
        const tabuada2 = numero*2
        const tabuada3 = numero*3
        const tabuada4 = numero*4
        const tabuada5 = numero*5
        const tabuada6 = numero*6
        const tabuada7 = numero*7
        const tabuada8 = numero*8
        const tabuada9 = numero*9
        const tabuada10 = numero*10
        console.log(tabuada1,tabuada2,tabuada3,tabuada4,tabuada5,tabuada6,tabuada7,tabuada8,tabuada9)
    }
    tabuada1Ao102 (9)


    // \n${numero*1} \n${numero*2}
    // ` shift dentro da crase é lid também `

    function tabuada ()