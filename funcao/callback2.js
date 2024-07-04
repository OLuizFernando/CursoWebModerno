const notas = [7.5, 6.0, 8.7, 9.9, 10.0, 5.6, 4.5]

// sem callback
const notasBaixas = []
for (let i in notas) {
    if (notas[i] < 6) {
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

// com callback
const notasAltas = notas.filter(function (nota) {return nota >= 8})

console.log(notasAltas)

const notasMedias = notas.filter(nota => nota >= 6 && nota < 8)

console.log(notasMedias)