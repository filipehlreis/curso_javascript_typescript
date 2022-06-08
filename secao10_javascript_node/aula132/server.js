const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true, }));

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Outro campo: <input type="text" name="qualquercoisa"><br>
    Nome do cliente: <input type="text" name="nome"><br>
    <button>Enviar formulario</button>
    </form>
    `);
});

app.get('/testes/:idUsuarios?/:parametro?', (req, res) => {
    // /profiles/3
    // /profiles/?chave1=valor1&chave2=valor2&chave3=valor3
    // 
    console.log(req.params);
    console.log(req.query);
    res.send(req.query.facebook);

});

app.post('/', (req, res) => {
    console.log(req.body);
    res.send(`O que voce me enviou foi: ${req.body.qualquercoisa}`);
});

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000.');
});