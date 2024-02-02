// função arrow
const soma1 = (n1, n2) => {
    return n1 + n2
}

console.log(soma1(4, 6))

// retorno implícito
const soma2 = (n1, n2) => n1 + n2 // (parâmetros) => operação/retorno

const print = a => console.log(a)

print(soma2(4, 6))