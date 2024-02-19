// exemplo break: quando i == 5, o laço será interrompido
for (let i = 0; i <= 9; i++) {
    if (i == 5) {
        break
    }
    console.log(`contagem = ${i}`)
}

// exemplo continue: quando i == 5, ele irá pular a repetição
for (let i = 0; i <= 9; i++) {
    if (i == 5) {
        continue
    }
    console.log(`contagem = ${i}`)
}

// exemplo break externo: quando a externo == 2 e b == 3, o laço será interrompido
externo:
for (let a = 0; a <= 5; a++) {
    for (let b = 0; b <= 5; b++) {
        if (a == 2 && b == 3) {
            break externo
        }
        console.log(`contagem = ${a}.${b}`)
    }
}