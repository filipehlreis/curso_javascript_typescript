/**
 * Metodos uteis para Promises
 * 
 * Promise.all
 * Promise.race
 * Promise.resolve
 * Promise.reject
 * 
 */

function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}



function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject('Cai no ERRO.');
                return;
            }
            resolve(msg.toUpperCase() + ' - Passei na promise.');
            return;
        }, tempo);
    });
}


// // Promise.all()
// const promises = [
//     'Primeiro valor',
//     esperaAi('Promise1', 3000),
//     esperaAi('Promise2', 500),
//     esperaAi('Promise3', 1000),
//     // esperaAi(1000, 1000),
//     'Outro valor',
// ];

// Promise.all(promises)
//     .then(function (valor) {
//         console.log(valor);
//     })
//     .catch(function (erro) {
//         console.log(erro);
//     });


// // Promise.race()
// // Entrega a primeira promise resolvida. É uma corrida.
// const promises = [
//     // 'Primeiro valor',
//     esperaAi('Promise1', rand(1, 5)),
//     esperaAi('Promise2', rand(1, 5)),
//     esperaAi('Promise3', rand(1, 5)),
//     esperaAi(1000, rand(1, 5)),
//     // 'Outro valor',
// ];

// Promise.race(promises)
//     .then(function (valor) {
//         console.log(valor);
//     })
//     .catch(function (erro) {
//         console.log(erro);
//     });



// Promise.resolve()
// Entrega a primeira promise resolvida. É uma corrida.
// const promises = [
//     // 'Primeiro valor',
//     esperaAi('Promise1', rand(1, 5)),
//     esperaAi('Promise2', rand(1, 5)),
//     esperaAi('Promise3', rand(1, 5)),
//     esperaAi(1000, rand(1, 5)),
//     // 'Outro valor',
// ];

// Promise.race(promises)
//     .then(function (valor) {
//         console.log(valor);
//     })
//     .catch(function (erro) {
//         console.log(erro);
//     });

function baixaPaginaResolve() {
    // const emCache = true;
    const emCache = false;

    if (emCache) {
        return Promise.resolve('Pagina em cache');
    } else {
        return esperaAi('Baixei a pagina', 3000);
    }
}

function baixaPaginaRejeita() {
    // const emCache = true;
    const emCache = true;

    if (emCache) {
        return Promise.reject('Pagina em cache');
    } else {
        return esperaAi('Baixei a pagina', 3000);
    }
}


baixaPaginaRejeita()
    .then(dadosPagina => {
        console.log(dadosPagina);
    })
    .catch(e => console.log('ERRO:', e));

    
baixaPaginaResolve()
    .then(dadosPagina => {
        console.log(dadosPagina);
    })
    .catch(e => console.log('ERRO:', e));