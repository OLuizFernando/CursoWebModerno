// função sem retorno
function imprimirSoma(n1, n2) {
    console.log(n1 + n2)
}

imprimirSoma(4, 6)
imprimirSoma(4) // number + undefined = NaN
imprimirSoma() // undefined + undefined = NaN
imprimirSoma(4, 6, 2, 7, 5) // soma apenas os 2 primeiros

// função com retorno
function soma(n1, n2=0) {
    return n1 + n2
}

console.log(soma(5, 10))
console.log(soma(5)) // segundo parâmetro definido como 0
console.log(soma()) // undefined + 0 = NaN

// função em variável
const imprimirSomaVar = function (a, b) { // anônima (nome não declarado depois de 'function')
    console.log(a + b)
}

imprimirSomaVar(10, 5)