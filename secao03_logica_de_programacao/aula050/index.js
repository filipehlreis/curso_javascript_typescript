/*
let a = 'A'; // B
let b = 'B'; // C
let c = 'C'; // A

const letras = [b, c, a];
[a, b, c] = letras;


console.log(a, b, c);
*/


/*
//    ... rest, ... spread
const numeros = [100, 200, 300, 400, 500, 600, 700, 800, 900];

const [um, dois, tres, ...resto] = numeros;

console.log(um, dois, tres);
console.log(resto);
*/


/*
//    ... rest, ... spread
const numeros = [100, 200, 300, 400, 500, 600, 700, 800, 900];

const [um, , tres, , cinco, , sete] = numeros;

console.log(um, tres, cinco);
*/

//                   0          1          2
//                0  1  2    0  1  2    0  1  2
const numeros = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(numeros[1][2]);

const [, [, , seis]] = numeros;

console.log(seis);


const [lista1, lista2, lista3] = numeros;
console.log(lista3);
console.log(lista3[2]); 