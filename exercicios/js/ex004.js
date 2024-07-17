/*
Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores.
*/

function divisao(dividendo, divisor) {
    console.log(`${dividendo} / ${divisor} = ${dividendo/divisor}`)
    console.log(`resto da divisão inteira = ${dividendo % divisor}`)
}

divisao(5, 2)