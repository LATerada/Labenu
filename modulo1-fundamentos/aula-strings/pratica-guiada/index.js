//Prática Guiada

//Escolha uma música, e escreva um console.log() que escreva os três primeiros versos da música em três linhas diferentes. Você deve utilizar apenas um console.log().

//console.log("Tu, que tens esse abraço raro, \n Se desse de bater assas, \n Me leva contigo pra passear")

/*
Vamos criar um programa que peça ao usuário para inserir seu nome, e sua cor favorita. Em seguida, o programa deve imprimir a mensagem:
A cor favorita de pessoa é cor;

Vamos fazer o programa duas vezes. Na primeira, com concatenação, e a segunda com Template Strings.
*/

const nome = prompt(`Qual é o seu nome?`)
//const cor = prompt(`Qual é a sua cor favorita?`)

//const mensagemConcatenada = "A cor favorita de " + nome + " é " + cor

//const mensagemTemplateString = `A cor favorita de ${nome} é ${cor}`

//console.log(mensagemConcatenada)
//console.log(mensagemTemplateString)

/*Agora, vamos alterar a forma com que o texto aparece.
Altere a primeira string para que a pessoa também envie sua citação favorita. Essa citação deve ser impressa entre aspas.
*/

//const citacao = `confie no procecsso`
//const mensagemConcatenada2 = "A cor favorita de " + nome + " é " + cor + " e minha citação favorita é \"" + citacao + "\"."

//console.log(mensagemConcatenada2)

//Altere a segunda string que criamos, para que seja impressa dessa forma (utilizando apenas um console.log):

//const mensagemTemplateString2 = `Meu nome é: ${nome}
//Minha cor favorita é: ${cor}
//Minha citação favortita é: "${citacao}"`

//console.log(mensagemTemplateString2)

//Vamos alterar a forma de nossa exibição de strings agora.
//Faça com que o nome da pessoa sempre seja exibido em letras maiúsculas;
//Exiba no console quantos caracteres tem o nome da pessoa.
//Cheque se o nome da pessoa possui a letra A

const nomeUpperCase = nome.toUpperCase()

const mensagemTemplateString3 = `Meu nome é ${nomeUpperCase}, ele possui ${nomeUpperCase.length} letras e possui a letra A? ${nomeUpperCase.includes("A")}`

//console.log(mensagemTemplateString3)

//EXERCÍCOS DE FIXAÇÃO
//1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, imprima no console a mensagem no formato abaixo:
//O e-mail emailDoUsuario foi cadastrado com sucesso. Boas vindas, nomeDoUsuario! 

    const email = prompt(`Qual é o seu e-mail?`)
    const mensagemBoasVindas = `O e-mail ${email.trim()} foi cadastrado com sucesso!
    Boas vindas, ${nomeUpperCase}!`

//console.log(mensagemBoasVindas)

//2. Adicione à mensagem anterior a quantidade de caracteres presente no nome da pessoa.

    const mensagemBoasVindas2 = `O e-mail ${email.trim()} foi cadastrado com sucesso!
    Boas vindas, ${nome}!
    ${nomeUpperCase.length}`

    //console.log(mensagemBoasVindas2)

//3. A seguir, faça o que se pede:
//Substitua todas as letras R na frase criada, por letras X
//Verifique se o e-mail da pessoa possui @, e imprima a resposta da checagem no console.

    const mensagemComX = mensagemBoasVindas2.replaceAll("R","X").replaceAll("r","x")
    const possuiA = email.includes("@")

    console.log(mensagemComX)
    console.log(`O e-mail possui @?${possuiA}`)