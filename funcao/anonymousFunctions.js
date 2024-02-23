const soma = function (n1, n2) {
    return n1 + n2
}

const imprimirResultado = function (n1, n2, operacao=soma) {
    console.log(operacao(n1, n2))
}

imprimirResultado(20, 5) // operação padrão (soma)
imprimirResultado(20, 5, soma) // explicitando a operação padrão
imprimirResultado(20, 5, function (n1, n2) { // usando outra operação, declarando uma função nos parâmetros
    return n1 * n2
})
imprimirResultado(20, 5, (n1, n2) => n1 / n2) // usando outra operação, usando arrow function com return implícito

const obj = {
    opa: function () { // usar função como atributo de um objeto
        console.log('Opa!')
    }
}

obj.opa()