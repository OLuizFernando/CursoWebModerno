/*
Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.
*/

function jurosSimples(capInicial, taxaJuros, tempoEmAnos) {
    let valorJuros = capInicial * taxaJuros * tempoEmAnos
    let valorTotal = capInicial + valorJuros

    return valorTotal.toFixed(2)
}

function jurosCompostos(capInicial, taxaJuros, tempoEmAnos) {
    let valorTotal = capInicial * (1 + taxaJuros) ** tempoEmAnos

    return valorTotal.toFixed(2)
}

console.log(`Juros Simples: R$${jurosSimples(1000, 0.05, 3)}`)
console.log(`Juros Compostos: R$${jurosCompostos(1000, 0.05, 3)}`)