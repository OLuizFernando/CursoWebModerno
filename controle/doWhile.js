function inteiroAleatorioEntre(max, min) {
    const valor = Math.random() * (max - min) + min
    return Math.round(valor)
}

// não é necessário definir a variável 'opcao' antes do laço
do {
    // o laço é executado pelo menos uma vez
     opcao = inteiroAleatorioEntre(-1, 10)
     console.log(`O valor sorteado foi ${opcao}`)
} while (opcao != 1)