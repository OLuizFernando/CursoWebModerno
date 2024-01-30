let booleano = false 

console.log('TRUES\n')

console.log(!!1)
console.log(!!-1)
console.log(!!' ')
console.log(!!'Luiz')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!booleano)
console.log(!!(booleano = true))

console.log('\nFALSES\n')

console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(booleano = false))

console.log('\n PRA FINALIZAR...\n')

console.log(!!('' || null || 0 || ' ')) // se algum dos elementos for true, retorna true (ou = ||)
console.log('' || null || 1234 || 'oi') // retorna o primeiro valor true (1234)

let nome = ''
console.log(`Olá, ${nome || 'Desconhecido'}`) // retorna 'Olá, Desconhecido' caso a variável nome esteja vazia