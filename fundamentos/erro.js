function tratarErroELancar(erro) {
    // throw new Error ('Ocorreu um erro.')
    // throw 1234
    // throw true
    // throw 'mensagem de erro'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function somarValores(obj) {
    try {
        console.log(`${obj.n1} + ${obj.n2} = ${obj.n1 + obj.n2}`)
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log('Programa finalizado.')
    }
}

const obj = {n1: 5, n2: 10}
somarValores() // linha com erro proposital: parâmetro obj não foi informado corretamente