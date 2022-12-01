// # Exercício 1

// Crie um código que receba um número por **prompt** e verifique se um número é divisível por 2 **ou** por 3
    
// Faça isso:
    
// 1. Utilizando ifs aninhados
    const num = +(prompt(`Digite um número`))

    if(num%2 === 0){
        console.log(`${num} divisível por 2, portanto divisível por 2 ou 3`)
        if(num%3 === 0){
            console.log(`Também divisivel por 2 e 3`)
        }
    }else if(num%3 === 0){
        console.log(`${num} divisível por 3, portanto divisível por 2 ou 3`)
        if (num%2 === 0){
            console.log(`Também divisivel por 2 e 3`)
        }
    }else{
        console.log(`${num} não é divisível por 2 ou 3`)
    }

// 2. Utilizando um operador lógico para unir duas operações relacionais
    // const num = +(prompt(`Digite um número`))

    // if (num%2 ==0 || num%3 === 0){
    //     console.log(`O número ${num} é divisível por 2 ou 3`)
    // }else{
    //     console.log(`O número ${num} não é divisível por 2 ou 3`)
    // }