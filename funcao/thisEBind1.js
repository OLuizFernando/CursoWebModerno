const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao) // this acessa o próprio objeto (self)
    }
}

pessoa.falar() // funciona normalmente

const falar = pessoa.falar // não funciona, pois quando está armazenado em uma variável, não consegue acessar o this.saudacao
falar()

const falarComBind = pessoa.falar.bind(pessoa) // o bind faz com que o this de pessoa possa ser acessado
falarComBind()