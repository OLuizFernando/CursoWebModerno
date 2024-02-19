// percorrendo array com 'for in'
nomes = ['Luiz', 'Fernando', 'Simone', 'Marlene', 'Nina']
for (let i in nomes) {
    console.log(`nomes[${i}] = ${nomes[i]}`)
}

// percorrendo objeto com 'for in'
produto = {
    nome: 'Asus Vivobook 16',
    processador: 'Intel Core i7-1255U',
    ram: 16,
    ssd: 512,
    os: 'Windows 11'
}
for (let caracteristica in produto) {
    console.log(`${caracteristica} = ${produto[caracteristica]}`)
}