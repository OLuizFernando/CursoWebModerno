// Uma função pode ter valores padrão, caso o usuário não os defina
function soma1 (n1, n2, n3) {
    n1 = n1 || 1
    n2 = n2 || 1
    n3 = n3 || 1
    return n1 + n2 + n3
}

console.log(soma1()) // retorna a soma dos valores padrão (1 + 1 + 1)
console.log(soma1(4, 5, 6)) // normal: soma os 3 valores
console.log(soma1(3, 6)) // soma os 2 valores passados + o padrão
console.log(soma1(0, 0, 0)) // 0 = false, então virará o valor padrão

// Outras maneiras de definir valores padrão
function soma2 (n1, n2, n3) {
    n1 = n1 !== undefined ? n1 : 1 // se n1 não for undefined, recebe n1, se for undefines, recebe o padrão (1)
    n2 = 1 in arguments ? n2 : 1 // se existir o índice 1 em arguments, recebe n2, senão, recebe o padrão (1)
    n3 = isNaN(n3) ? 1 : n3 // se n3 for NaN, recebe o padrão (1), senão, recebe n3
    return n1 + n2 + n3
}

console.log(soma2(0, 0, 0)) // funciona com 0

// Principal maneira de criar valor padrão do ES2015
function soma3 (n1=1, n2=1, n3=1) {
    return n1 + n2 + n3
}