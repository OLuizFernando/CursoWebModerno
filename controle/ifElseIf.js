Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}


const resultado = function (nota) {
    if (nota.entre(8, 10)) {
        console.log('Mérito Acadêmico')
    } else if (nota.entre(6, 7.9)) {
        console.log('Aprovado')
    } else if (nota.entre(4, 5.9)) {
        console.log('Recuperação')
    } else if (nota.entre(0, 3.9)) {
        console.log('Reprovado')
    } else {
        console.log('Nota Inválida')
    }
}

resultado(10)
resultado(7)
resultado(5)
resultado(2)
resultado(-1)
resultado(99)