const peso1 = 1.0
const peso2 = 1.5

console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const prova1 = 9.263
const prova2 = 5.728

const total = prova1 * peso1 + prova2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2))
console.log(media.toString(16))
console.log(typeof media)