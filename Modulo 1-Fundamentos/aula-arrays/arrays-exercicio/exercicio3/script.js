/*# Exercício 3

Agora, vamos manipular os arrays, adicionando ou removendo informações. Para isso, crie **três** novos arrays, chamados `nomeDoArrayOriginalCopia`, e faça o que se pede abaixo nas cópias dos arrays originais;

- Adicione um item `number` ao início do primeiro array. Utilize `console.log()` para exibir o original e a cópia;
- Remova o último item do segundo array. Utilize `console.log()` para exibir o original e a cópia;
- Remova o segundo item do terceiro array. Utilize `console.log()` para exibir o original e a cópia;
*/

const arrayNumeros = [98,2,14];
const arrayStrings = ["Lari","Labenu","Lime"];
const arrayMisto = [99, "Limão", true];

const arrayNumerosCopia = arrayNumeros.slice()
const arrayStringsCopia = arrayStrings.slice()
const arrayMistoCopia = arrayMisto.slice()

arrayNumerosCopia.unshift(7)
console.log("Array Números original:", arrayNumeros)
console.log("Array Números cópia:",arrayNumerosCopia)

arrayStringsCopia.pop()
console.log("Array Strings original:", arrayStrings)
console.log("Array Strings cópia:",arrayStringsCopia)

arrayMistoCopia.splice(1,1)
console.log("Array Mista original:", arrayMisto)
console.log("Array Mista cópia:",arrayMistoCopia)