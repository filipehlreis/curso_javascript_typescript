const numero = 10;

/**
 * Se (numero >= 0 && numero <= 5) ocorrer, faça isso {codigo}
 *  se nao, faça isso {codigo}
 */
if (numero <= 10) {
    console.log('O numero é menor ou igual a 10.');
}

if (numero >= 0 && numero <= 5) {
    console.log('Sim, o numero é maior ou igual a zero.');
} else if (numero >= 6 && numero <= 8) {
    console.log('O numero está entre 6 e 8.');
} else if (numero >= 9 && numero <= 11) {
    console.log('O numero está entre 9 e 11.');
} else {
    console.log('O numero nao está entre 0 e 11.');
}

console.log(' ... Aqui vai o restante do codigo.')