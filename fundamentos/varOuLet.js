// var: escopo global e função
var testeVar = 0
{
    var testeVar = 1
    console.log('dentroVar = ', testeVar) // dentro ou fora do bloco, testeVar é sobrescrito
}
console.log('foraVar = ', testeVar)

// let: escopo global, função e bloco
let testeLet = 0
{
    let testeLet = 1
    console.log('dentroLet = ', testeLet) // testeLet não é sobrescrito quando está dentro de um bloco
}
console.log('foraLet = ', testeLet)