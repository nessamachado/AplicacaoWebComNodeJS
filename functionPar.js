
function verificaPar(numero) {
    if (numero % 2 === 0) {
    return "ok, é numero par!"
} 
    return "não é numero par!"
}

console.log(verificaPar(2))

module.exports = verificaPar