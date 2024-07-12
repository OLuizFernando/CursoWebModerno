const valor = "global"

function minhaFuncao() {
    console.log(valor)
}

function exec() {
    const valor = "local"
    minhaFuncao()
}

exec()

/*
ao chamar minhaFuncao dentro de exec, a minhaFuncao encontra a variavel de valor "global",
pois além da variavel de valor "local" estar contida dentro da exec,
a minhaFuncao foi declarada mais proxima da declaração da variavel com valor "global"
*/