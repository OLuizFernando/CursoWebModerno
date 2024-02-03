const pessoa = {
    nome: 'Luiz',
    idade: 17,
    endereco: {
        logradouro: 'Rua dos Pássaros',
        numero: 123
    }
}

const {nome, idade} = pessoa // cria uma ou mais variáveis iguais aos atributos do objeto 'pessoa'
console.log(nome, idade)

const {nome: n, idade: i} = pessoa // atribuindo nomes às variáveis
console.log(n, i)

const {email='Não Informado',  senha='Não Informado'} = pessoa // atribuindo valores padrão á variáveis undefined