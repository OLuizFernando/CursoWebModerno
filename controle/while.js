function inteiroAleatorioEntre(max, min) {
    const valor = Math.random() * (max - min) + min
    return Math.round(valor)
}

let opcao = 0

while (opcao != -1) {
     opcao = inteiroAleatorioEntre(-1, 10)
}