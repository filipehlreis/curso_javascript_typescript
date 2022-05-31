/**
 * Promises
 */

function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}


/**
 * Utilizando o esquema com callback para parecer sincrono
 */

// function esperaAi(msg, tempo) {
//     setTimeout(() => {
//         console.log(msg);
//     }, tempo);
// }


// esperaAi('Frase1', rand(1, 3));
// esperaAi('Frase2', rand(1, 3));
// esperaAi('Frase3', rand(1, 3));


// function esperaAi2(msg, tempo, cb) {
//     setTimeout(() => {
//         console.log(msg);
//         if (cb) cb();
//     }, tempo);
// }


// esperaAi2('Frase1', rand(1, 3), function () {
//     esperaAi2('Frase2', rand(1, 3), function () {
//         esperaAi2('Frase3', rand(1, 3), function () {
//         });
//     });
// });



function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') reject('BAD VALUE');
        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}
esperaAi('Conexao com o BD', rand(1, 3))
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Buscando dados da BASE', rand(1, 3));
    })
    .then(resposta => {
        console.log(resposta);
        return esperaAi(22222, rand(1, 3));
        // return esperaAi('Tratando os dados da BASE', rand(1, 3));
    })
    .then(resposta => {
        console.log(resposta);
    }).then(() => {
        console.log('Exibe dados na tela.');
    })
    .catch(e => {
        // o catch é para poder tratar possiveis erros que aconteceram 
        // durante a execucao.
        console.log('ERRO:', e);
    });


console.log('Isso aqui será exibido antes de qualquer promise.');