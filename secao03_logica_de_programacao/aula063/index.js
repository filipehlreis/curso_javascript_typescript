
/**
 *  nunca exibir o erro para o usuario
 * 
 * Quando ocorrer qualquer tipo de erro, informe ao usuario, no maximo, que 
 * ocorreu um "erro desconhecido", mas o erro em si, trate de alguma forma.
 * possivelmente tratar inserindo o erro em um log, em um banco de dados ou 
 * algo assim
 */

try {
    console.log(naoExisto);
} catch (err) {
    console.log('naoExisto nao existe.');
}
console.log();

function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('x e y precisam ser numeros.');
    }
    return x + y;
}


try {

    console.log(soma(1, 1));
    console.log(soma(1, '1'));
} catch (error) {
    // console.log(error);
    console.log('alguma coisa mais amigavel para o usuario');
}

