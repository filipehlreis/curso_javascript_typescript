exports.middlewareGlobal = (req, res, next) => {

    if (req.body.cliente) {
        req.body.cliente = req.body.cliente.replace('Miranda', 'NAO USE MIRANDA');
        console.log();
        console.log(`Vi que voce postou ${req.body.cliente}`);
        console.log();
    }
    // console.log('Passei no middleware global');

    next();
};

exports.outroMiddleware = (req, res, next) => {
    // Codigo
    console.log('Sou seu outro middleware');
    next();
};