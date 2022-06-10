exports.middlewareGlobal = (req, res, next) => {
    res.locals.umaVariavelLocal = 'este é o valor da variavel local.';
    next();
};

exports.outroMiddleware = (req, res, next) => {
    // Codigo
    console.log('Sou seu outro middleware');
    next();
};