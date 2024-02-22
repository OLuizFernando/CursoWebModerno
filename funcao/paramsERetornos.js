// Parâmetros e funções são opcionais
function calcularArea (largura, comprimento) {
    const area = largura * comprimento
    if (area > 20) {
        console.log('Área maior do que o permitido.')
    } else {
        return area
    }
}

console.log(calcularArea(4, 2)) // area < 20 = normal
console.log(calcularArea(2)) // 2 * undefined = NaN
console.log(calcularArea()) // undefined * undefined = NaN
console.log(calcularArea(2, 3, 6, 5, 12)) // só utiliza os 2 primeiros parâmetros
console.log(calcularArea(5, 10)) // area > 20 = return undefined e printa a mensagem