function soBoaNotici (nota) {
    if (nota >= 6) {
        console.log(`Aprovado com nota ${nota}`)
    }
}

soBoaNoticia(6.5)
soBoaNoticia(4.7)

function seForVerdadeEuFalo (valor) {
    if (valor) {
        console.log(`É verdade... ${valor}`)
    }
}

seForVerdadeEuFalo(2 + 2 == 4)
seForVerdadeEuFalo(1)
seForVerdadeEuFalo()
