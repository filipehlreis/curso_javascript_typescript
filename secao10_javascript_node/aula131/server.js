const express = require('express');
const app = express();

//          Criar    Ler    Atualizar   Apagar
// CRUD ->  CREATE,  READ,  UPDATE,     DELETE
//          POST     GET    PUT         DELETE

// http://meusite.com/ <- GET -> Entregue a pagina /
// http://meusite.com/sobre <- GET -> Entregue a pagina /sobre
// http://meusite.com/contato <- GET -> Entregue a pagina /contato


app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome do cliente: <input type="text" name="nome">
    <button>Enviar formulario</button>
    </form>
    `);
});

app.post('/', (req, res) => {
    res.send('Recebi o seu formulario!');
});

app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato com a gente.');
});


app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000.');
});