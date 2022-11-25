/*Faça uma função
que receba como parâmetros, login e senha. 

No corpo da função declare duas variáveis do tipo string loginArmazenado e senhaArmazenada com lavores já pré estabelecidos.
Usaremos essas variáveis para verificar se são iguais às que estamos recebendo como parâmetro. 

Retorne true se as duas variáveis forem verdadeiras.
*/

const pratica3 = (loginDigitado, senhaDigitada) => {
    const loginArmazenado = "Admin"
    const senhaArmazenada = "123456"

    return loginDigitado === loginArmazenado &&
            senhaDigitada === senhaArmazenada
}

function pratica3Function (loginDigitado, senhaDigitada) {
    const loginArmazenado = "Admin"
    const senhaArmazenada = "123456"

    return loginDigitado === loginArmazenado &&
            senhaDigitada === senhaArmazenada
    // após o return, nada mais será executado

    console.log(loginDigitado === loginArmazenado &&
    senhaDigitada === senha)
}

console.log(pratica3 ("Admin", "123456"))
console.log(pratica3 ("admin", "123456")) // login errado
console.log(pratica3 ("Admin", "12345")) // senha errada

console.log(pratica3Function ("Admin", "123456"))
console.log(pratica3Function ("admin", "123456")) // login errado
console.log(pratica3Function ("Admin", "12345")) // senha errada