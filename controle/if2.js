var teste = true

if (teste)
    console.log('isso está dentro do if')
    console.log('isso não está dentro do if') // está fora do if, pois o if não está usando {chaves}
// esta segunda sentença será executada sempre

if (teste) { // preste atenção nas {chaves}
    console.log('isso está dentro do if')
    console.log('isso também está')
    console.log('isso também') // tudo que estiver dentro das {chaves} do if vai fazer parte da estrutura
}

if (false); { // nunca use ; nas estruturas de controle, pois ele executará uma sentença vazia e o resto sairá da estrutura
    console.log('isso está fora do if')
}