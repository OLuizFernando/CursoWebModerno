// abstrair as condições matemáticas de existência de um triângulo

function getTipoTriangulo(lado1, lado2, lado3) {
    if (lado1 != lado2 && lado2 != lado3 && lado1 != lado3) {
        return 'Escaleno'
    } else if (lado1 == lado2 == lado3) {
        return 'Equilátero'
    } else {
        return 'Isósceles'
    }
}

console.log(getTipoTriangulo(1, 1, 1))
console.log(getTipoTriangulo(1, 2, 1))
console.log(getTipoTriangulo(1, 2, 3))