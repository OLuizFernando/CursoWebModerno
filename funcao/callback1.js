const marcas = ['Asus', 'Dell', 'Lenovo', 'Acer', 'Samsung']

function imprimir(nome, indice) {
    console.log(`${indice + 1}: ${nome}`)
}

marcas.forEach(imprimir)
marcas.forEach(marca => console.log(marca))