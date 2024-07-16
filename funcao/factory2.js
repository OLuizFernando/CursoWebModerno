// factory personalizável
function criarProduto(nome, preco) {
    return {
        nome,
        preco
    }
}

console.log(criarProduto("refrigerante", 7))