/*# Exercício 3

A partir da frase a seguir, faça o que se pede

```
Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"
```

a) Crie uma `const` no seu código para guardar a frase (com aspas e tudo);

b) Crie uma nova string a partir da primeira, trocando **verde** por **rosa**, e **azul** por **laranja**;

c) Verifique se a nova string inclui **verde**, e se inclui **laranja**.

**EXTRA:** tente fazer o “mas não deixe o gato sair” ficar em maiúsculo, assim como o “BOAS VINDAS”
*/

const fraseCasa = "Jorge tem uma casa verde e com portão azul, com os dizeres: \"BOAS VINDAS, mas não deixe o gato sair\""
const fraseNova = fraseCasa.replace("verde","rosa").replace("azul","laranja")

console.log(fraseNova)
console.log(fraseNova.includes("verde"))
console.log(fraseNova.includes("laranja"))

const fraseBoasVindas = "\"BOAS VINDAS, mas não deixe o gato sair\""
const fraseCasa2 = `Jorge tem uma casa verde e com portão azul, com os dizeres: ${fraseBoasVindas.toUpperCase()}`

console.log(fraseCasa2)