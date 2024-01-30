/*
    duas maneiras de declarar um objeto:
    -> {} vazio e depois ir adicionando (prod1)
    -> {} aberto com tudo predefinido (prod2)
*/

const prod1 = {}
prod1.nome = 'Dell Latitude 3410'
prod1.preco = 2850
prod1.espec = {
    cpu: 'Intel Core i7-10510U',
    ram: 16,
    ssd: 256,
    os: 'Windows 11'
}

const prod2 = {
    nome: 'Lenovo Ideapad 3',
    preco: 2690,
    espec: {
        cpu: 'AMD R7-5700U',
        ram: 12,
        ssd: 512,
        os: 'Linux'
    }
}

console.log(prod1)
console.log(prod2)