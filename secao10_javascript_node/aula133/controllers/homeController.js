exports.paginaInicial = (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Outro campo: <input type="text" name="qualquercoisa"><br>
    Nome do cliente: <input type="text" name="nome"><br>
    <button>Enviar formulario</button>
    </form>
    `);
};

exports.trataPost = (req, res) => {
    res.send('Ei, sou sua nova rota de POST.');
};