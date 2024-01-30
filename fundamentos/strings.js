const nome = 'Luiz Fernando'

console.log(nome.charAt(0))
console.log(nome.charAt(5))
console.log(nome.charAt(13)) // não dá IndexError

console.log(nome.charCodeAt(0))

console.log(nome.indexOf('z'))

console.log(nome.substring(5))
console.log(nome.substring(0, 4))

console.log('Meu nome é '.concat(nome).concat('!'))

console.log(nome.replace('Fernando', 'Felipe'))

console.log(nome.split(' '))