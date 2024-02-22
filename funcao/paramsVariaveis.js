// Uma função pode ter um número variáveis de parâmetros a ser passados
function soma() {
    let soma = 0
    for (i in arguments) {
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(2, 3, 10))

console.log(soma(1, 2, 3, 'Teste')) // retorna a concatenação do valor de 1 + 2 + 3 com a string 'Teste'
console.log(soma('Hello, ', 'World!')) // retorna o valor de soma (0) com as strings 'Hello ,' e 'World!'