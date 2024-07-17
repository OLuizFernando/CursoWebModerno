function formatToReal(num) {
    num = num.toFixed(2).replace('.', ',')
    return `R$${num}`
}

valor = 0.1 + 0.2
console.log(formatToReal(valor))