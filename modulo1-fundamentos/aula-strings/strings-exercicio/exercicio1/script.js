/*# Exercício 1

Faça um programa que pergunte ao usuário seu nome e suas três comidas favoritas. Em seguida, Imprima no console a seguinte mensagem:
    
    ```
    Estas são as comidas favoritas de nomeDoUsuario
    - Comida1
    - Comida2
    - Comida3
    ```
    
Você deve usar apenas um `console.log()` para isso

  <details> 
  <summary> 💡 Dica</summary>
  
    ⭐ Você pode juntar texto com variáveis de duas formas:
    - Concatenando as strings (com o sinal de +)
    - Utilizando template strings (e envolvendo a sua string com o sinal de CRASE ao invés de aspas ⇒ ````)
    
    Adicionar um  `\n` na string coloca uma **quebra de linha** no texto.
  
  </details>
    */


    const nomeUsuario = prompt(`Qual é o seu nome?`)
    const comida1 = prompt(`Qual é a sua comida favorita?`)
    const comida2 = prompt(`Qual é a sua segunda comida favorita?`)
    const comida3 = prompt(`Qual é a sua terceira comida favorita?`)

    const fraseConcatenada = "Estas são as comidas favoritas de " + nomeUsuario + "\n-" + comida1 + "\n-" + comida2 + "\n-" + comida3
    console.log(fraseConcatenada)

    const fraseTemplateString = `Estas são as comidas favoritas de ${nomeUsuario}
    -${comida1}
    -${comida2}
    -${comida3}`