const express = require('express');
const app = express()
const port = 8081;
const functionPar = require("./functionPar");
const functionPrimo = require("./functionPrimo");

app.get('/verificaNumero/:num', (req, res) => {
    const num = req.params.num;
    let verificaSePar = functionPar(num);
    let verificaSePrimo = functionPrimo(num);
    res.send(`O numero: ${num} ${verificaSePar} e ${num} ${verificaSePrimo}`);
});

app.listen(port, () => {
    console.log(`exercicio`)
})

/* const http = require('http');
const port = 8081 //porta do server listen

const server = http.createServer((req, res) =>{
    if (req.url === '/home') { // rotas
        res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
        res.end('<h1> Home </h1>');
        return
}
// else
    res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
    res.end('<h1> Olá Vanessa, tudo bem? </h1>');
});

server.listen(port, () => console.log(`Rodando na porta ${port}`)) //chamando servidor pra rodar
 */



/* const express = require('express'); // importar o express
const app = express() // invocar ele como uma função

const port = 8081; // definir uma porta da aplicação

app.get('/',(req,res)=>{ //o que precisa ser feito quando o usuario acessa o "/"
    res.send('Olá')

})

app.get('/home',(req,res)=>{
    res.send('estamos na home!')

})

app.listen(port,() => {
    console.log(`rodando na ${port} com express`)
}) */