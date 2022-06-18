
function verificaPrimo(numero) {
    let divisores = 0
    for (let divisor = 1; divisor <= numero; divisor++) {
        if (numero % divisor === 0) {
            divisores++
        }
    }
    if(divisores === 2) {
        return 'ok, é numero primo!'
    } else {
        return 'não é numero primo'
    }}
    console.log(verificaPrimo(2))

    module.exports = verificaPrimo

    