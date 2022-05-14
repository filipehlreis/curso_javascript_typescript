/**
 * Closures
 */

function retornaFuncao(nome) {
    // const nome = 'Luiz';
    return function () {
        return nome;
    };
}

const funcao = retornaFuncao('Filipe');
const funcao2 = retornaFuncao('Luiz');
console.log(funcao);
console.dir(funcao);
console.dir(funcao2);

/**
 *  Closure é a habilidade de a funcao tem de acessar o seu escopo lexico.
 */