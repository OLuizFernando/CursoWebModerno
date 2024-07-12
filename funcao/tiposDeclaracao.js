// function declaration
console.log(soma(1, 2)) // dá pra usar antes da declaração
function soma(x, y) {
    return x + y
}


// function expression
const sub = function (x, y) {
    return x -+ y
}
console.log(sub(2, 1)) // só dá pra usar depois da declaração


// named function expression
const mult = function soma(x, y) {
    return x * y
}
console.log(mult(2, 3)) // só dá pra usar depois da declaração