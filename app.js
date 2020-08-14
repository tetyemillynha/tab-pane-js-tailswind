// app.js

const http = require('http');

// Crie uma instância do servidor http para manipular solicitações HTTP
let app = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});

    res.end('Hello World!\n');
});

// Inicie o servidor na porta 80
app.listen(80, '127.0.0.1');