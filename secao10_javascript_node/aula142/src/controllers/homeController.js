exports.paginaInicial = (req, res,) => {
    // req.session.usuario = { nome: 'Filipe', logado: true };
    // req.flash('info', 'Olá mundo!');
    // req.flash('error', 'hfuiasdhfasiud hu iasdfhu iasd!');
    // req.flash('success', 'Blaaaaaac!');
    console.log(req.flash('success'), req.flash('error'), req.flash('info'));
    console.log(req.session.usuario);
    res.render('index');
    return;
};

exports.trataPost = (req, res) => {
    res.send(req.body);
    return;
};