/*Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo `true` ou `false`:

```
O primeiro numero é maior que segundo? true
O primeiro numero é igual ao segundo? false
O primeiro numero é divisível pelo segundo? true
O segundo numero é divisível pelo primeiro? true

divisível = com resto zero

Obs: O true ou false vai depender dos números inseridos e do resultado das operações.
```*/

const p1 = "Digite um número"
const p2 = "Digite outro número"
let n1
let n2

n1 = Number(prompt(p1))
n2 = Number(prompt(p2))

comp1 = n1 > n2
console.log("O primeiro numero é maior que segundo? - ",comp1)
//console.log(typeof comp1)

comp2 = n1 == n2
console.log("O primeiro numero é igual ao segundo? - ",comp2)

comp3 = n1%n2 == 0
console.log("O primeiro numero é divisível pelo segundo? - ",comp3)

comp4 = n2%n1 == 0
console.log("O segundo numero é divisível pelo primeiro? - ",comp4)
