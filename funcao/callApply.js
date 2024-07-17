function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

global.preco = 20
global.desc = 0.1
console.log(getPreco()) // pega os atributos globais

const prod1 = {
    nome: 'Kindle',
    preco: 500,
    desc: 0.2,
    getPreco
}
console.log(prod1.getPreco()) // pega os atributos do objeto "produto"

const prod2 = {
    nome: 'Carro',
    preco: 50000,
    desc: 0.05
    // não tem o atributo getPreco
}
console.log(getPreco.call(prod2)) // .call() chama a função a partir do objeto que está nos parênteses
console.log(getPreco.apply(prod2)) // faz a mesma coisa

console.log(getPreco.call(prod2, 0.3, 'US$')) // .call(contexto, param1, param2, ...)
console.log(getPreco.apply(prod2, [0.3, 'US$'])) // .apply(contexto, [param1, param2, ...]) <- array de parâmetros