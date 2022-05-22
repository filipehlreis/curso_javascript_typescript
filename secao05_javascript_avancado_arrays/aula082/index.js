/**
 * Metodo Splice
 */

//               -5       -4        -3         -2        -1
//                0        1         2          3         4
const nomes = ['Maria', 'Joao', 'Eduardo', 'Gabriel', 'Julia'];
console.log(nomes);
console.log();

// nomes.splice(indice, delete, elem1, elem2, elem3);

// remover
// const removidos = nomes.splice(3, 2);
// const removidos = nomes.splice(-2, 1);
// const removidos = nomes.splice(-2, Number.MAX_VALUE);


// add
// const removidos = nomes.splice(3, 0, 'Luiz');
// const removidos = nomes.splice(3, 1, 'Luiz');
// const removidos = nomes.splice(3, 2, 'Luiz');
// const removidos = nomes.splice(3, 2, 'Luiz', 'Otavio');


// pop
// const removidos = nomes.splice(-1, 1);

// shift
// const removidos = nomes.splice(0, 1);

// push
// se colocar -1, vai inserir na penultima posicao, empurrando o ultimo.
// nomes.splice(-1, 0, 'Luiz'); // nao funciona
// nomes.splice(nomes.length, 0, 'Luiz', 'Otavio', 'Miranda');

// unshift
nomes.splice(0, 0, 'Luiz', 'Otavio');

console.log(nomes);
// console.log(nomes, removidos);