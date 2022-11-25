/*# Exercício 2

Com os arrays criados, agora vamos observar os arrays. Faça o que se pede abaixo, utilizando `console.log()`:

- Imprima a quantidade de itens de cada array (utilize um console.log() para cada impressão);
- Imprima o primeiro item do primeiro array, o segundo item do segundo array, e o terceiro item do terceiro array;
- Verifique se um item está incluído no primeiro array e depois no terceiro array e imprima o resultado destas verificações no console.log(). A primeira impressão deve retornar um booleano true e a segunda deve retornar um booleano false. 
*/


const arrayNumeros = [98,2,14];
const arrayStrings = ["Lari","Labenu","Lime"];
const arrayMisto = [99, "Limão", true];

    console.log(arrayNumeros.length)
    console.log(arrayStrings.length)
    console.log(arrayMisto.length)

    console.log(arrayNumeros[0])
    console.log(arrayStrings[1])
    console.log(arrayMisto[2])

    console.log(arrayNumeros.includes(14))
    console.log(arrayMisto.includes(false))