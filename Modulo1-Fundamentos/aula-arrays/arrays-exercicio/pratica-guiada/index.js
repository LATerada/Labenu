// Aula ao vivo
// PARTE 1 -
// Vamos criar alguns arrays, e refletir a respeito.

// Crie um array com 3 itens do tipo String
    const arrayString = ["Lari", "Rods", "Gigi"];
        console.log (arrayString)
        console.table(arrayString)
        console.log(arrayString.length)

// Crie um array com 3 itens do tipo Number
    const arrayNumber = [24,25,15];
        console.log(arrayNumber)
        console.table(arrayNumber)

// Crie um array com uma String, um número e um booleano;
    const nome = "Gu"
    const idade = 21
    const maior18 = true
    const arrayMisto = [nome, idade, maior18]
        console.log(arrayMisto)
        console.table(arrayMisto)

// Crie um array com apenas um valor. Um número.
    const array1Elemento = [1000];
        console.table (array1Elemento)

// Crie um array sem nenhum valor dentro.
    const arrayVazio = [];
        console.log(arrayVazio) // []

// PARTE 2 -
//Vamos tentar acessar índices específicos dos arrays da última prática.
//Cheque o length do primeiro array. O que acontece se tentarmos acessar o índice 3 deste array?
        console.log (arrayString[3]); // undefined

//Verifique se o terceiro array inclui cada um dos itens;
    const buscaBoleana = true
        console.log(arrayMisto.includes("Gustavo")) // false
        console.log(arrayMisto.includes(21)) // true
        console.log(arrayMisto.includes(nome)) // true
        console.log(arrayMisto.includes(buscaBoleana)) // true

//No quarto array, imprima o valor do único item. Observe qual o seu índice, e imprima seu tamanho.
        console.log(array1Elemento[0]) // 1000
        console.log(array1Elemento.indexOf(10)) // -1
        console.log(array1Elemento.indexOf(1000)) // 0
        console.log(array1Elemento.length) // 1


//Crie uma cópia do primeiro array, utilizando a atribuição com sinal de igual.
    const arrayString2 = arrayString //criou-se uma referencia, ficando interligados

//Faça push() de uma nova string no array copiado
    arrayString2.push("De")

//Imprima os dois arrays. Há diferença?
        console.log(arrayString)
        console.log(arrayString2) // n há diferença

//Como podemos ajustar?
    const arrayString3 = arrayString.slice();
    arrayString3.push("Tuts")
    console.table(arrayString)
    console.table(arrayString3)


//Com o array copiado corretamente, remova os itens dos índices 2 e 3 do array copiado.
        console.table(arrayString3)
    arrayString3.splice(2,2)
        console.table(arrayString3)


// PARTE 3 - 
//1. Crie um novo array. Ele deve possuir apenas números, e estes números não devem seguir nenhuma ordem específica. Por enquanto, não vamos imprimir o array.
    const novoArray = [2030, 24, 32, 2022];

//2. Depois disso, crie uma cópia deste array utilizando o método slice().
    const novoArrayCopia = novoArray.slice()

//3. No array copiado:
//Remova o último item 
    novoArrayCopia.pop()
    
//Em seguida adicione o número 6 no fim do   array.
    novoArrayCopia.push(6)

//Depois, remova o número que está no índice 2 array.
    novoArrayCopia.splice(2,1)

//Por fim, imprima os dois arrays.
        console.table(novoArray)
        console.table(novoArrayCopia)