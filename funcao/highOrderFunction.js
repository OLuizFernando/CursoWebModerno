// Função em JS é First-Class Object (citizens)
// High-order Function

// Forma literal
function fun1 () {}

// Armazenar em variável
const fun2 = function () {}

// Armazenar em array
const lista = [function (n1, n2) {return (n1 + n2)}, fun1, fun2]
console.log(lista[0](1, 2))

// Armazenar em atributo de objeto
const obj = {}
obj.funcao = function () {return ('Estou dentro de um objeto!')}
console.log(obj.funcao())

// Passar como parâmetro
function run (fun3) {
    fun3()
}
run(function () {return console.log('Estou dentro de outra função, como parâmetro')})

// Uma função pode retornar/conter outra
const fun4 = function (n1, n2) {
    return function (n3) {
        console.log(n1 + n2 + n3)
    }
}
fun4(n1=4, n2=5)(n3=6)

const cincoMais = fun4(2, 3)
cincoMais(7)