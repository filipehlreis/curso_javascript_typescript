// declaracao de funcao (function hoisting = eleva a funcao, indifere onde 
// voce está declarando a funcao, a engine do JS vai elevar e vai declarar 
// antes de executar o codigo)
function falaOi() {
    console.log('oi');
}
falaOi();

/** First-class objects (objetos de primeira classe)
 * function expression 
 * 
 * é interessante pois é possivel enviar a funcao como se fosse um parametro
 * para dentro de outra funcao
 * */
const souUmDado = function () {
    console.log('sou um dado.');
}

souUmDado();

function executaFuncao(funcao) {
    console.log('vou executar sua funcao abaixo:')
    funcao();
}

executaFuncao(souUmDado);

/**
 * Arrow function
 */
const funcaoArrow = () => {
    console.log('Sou uma arrow function.');
}

funcaoArrow();


/**
 * Dentro de um objeto
 */

const obj = {
    falar: function () {
        console.log('Estou falando...');
    },
    falandoMais() {
        console.log('Estou falando mais ...');
    }
}

obj.falar();
obj.falandoMais();