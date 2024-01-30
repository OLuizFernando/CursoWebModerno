const lista = [5, 5.75, 6.5, 4.25]

console.log(lista[0])
console.log(lista[3])
console.log(lista[10])

lista[4] = 8
console.log(lista)
console.log(lista.length)

lista.push({id: 3}, false, null, 'String')
console.log(lista)

console.log(lista.pop())
delete lista[0]
console.log(lista)

console.log(typeof lista)