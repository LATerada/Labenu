// # Exercício 3

// Crie uma função que receba do usuário sua nacionalidade, utilize um **prompt** que diga: "Escreva aqui sua nacionalidade" e guarde o valor da resposta em uma const `nacionalidade`.

// Vamos considerar que nosso programa aceita as seguintes 5 nacionalidades:
// - brasileira;
// - argentina;
// - uruguaia;
// - chilena;
// - colombiana;

// Crie uma estrutura de `if/else if/else` que verifique se a nacionalidade guardada na const `nacionalidade` é igual a cada uma das nacionalidades acima, e caso seja, imprima a nacionalidade no console. O último `else` deve imprimir "nacionalidade não encontrada" caso o valor de `nacionalidade` não corresponda a nenhum dos valores.

// > 💡 Lembre-se de prestar atenção às letras maiúsculas e minúsculas. 

    // //resolucao simplificada:
    // const nacionalidade = prompt(`Escreva aqui a sua nacionalidade`).toLowerCase()

    // function verificarNacionalidade (nacionalidade){
    //     const nacionalidades = ["brasileira", "argentina", "uruguaia", "chilena", "colombiana"]
    //     if(nacionalidades.includes(nacionalidade)){
    //         return`A nacionalidade da pessoa é ${nacionalidade}`
    //     }else{
    //         return`Nacionalidade ${nacionalidade} não encontrada no banco de dados`
    //     }
    // }
    // console.log(verificarNacionalidade(nacionalidade))


    //resolução como o enunciado pede:
    const nacionalidade = prompt(`Escreva aqui a sua nacionalidade`).toLowerCase()
        const verificarNacionalidade = (nacionalidade) => {
            if(nacionalidade === "brasileira"){
                console.log(`A nacionalidade da pessoa é Brasileira`)
            }else if(nacionalidade === "argentina"){
                console.log(`A nacionalidade da pessoa é Argentina`)
            }else if(nacionalidade === "uruguaia"){
                console.log(`A nacionalidade da pessoa é Uruguaia`)
            }else if(nacionalidade === "chilena"){
                console.log(`A nacionalidade da pessoa é Chilena`)
            }else if(nacionalidade === "colombiana"){
                console.log(`A nacionalidade da pessoa é Colombiana`)
            }else{
                console.log(`Nacionalidade ${nacionalidade} não encontrada`)
            }
        }
        
        verificarNacionalidade(nacionalidade)