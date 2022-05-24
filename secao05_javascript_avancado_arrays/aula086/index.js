/**
 * Reduce
 */

// Some todos os numeros (reduce)
// Retorne um array com os pares (filter)
// Retorne um array com o dobro dos valores (map)
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];


// Some todos os numeros (reduce)
// const total = numeros.reduce(function (acumulador, valor, indice, array) {
//     acumulador += valor;
//     return acumulador;
// }, 0);

// console.log(total);


// Retorne um array com os pares (filter)
const total = numeros.reduce(function (acumulador, valor, indice, array) {
    if (valor % 2 === 0) acumulador.push(valor);
    return acumulador;
}, []);

console.log(total);



// Retorne um array com o dobro dos valores (map)
const dobro = numeros.reduce(function (acumulador, valor, indice, array) {
    acumulador.push(valor * 2);
    return acumulador;
}, []);

console.log(dobro);

const somaPares = numeros.reduce(function (acumulador, valor, indice, array) {
    if (valor % 2 === 0) {
        acumulador += valor;
    }
    return acumulador;
}, 0);
// tomar cuidado e ficar atento a quando mandar um valor inicial ou nao para 
// o acumulador
console.log(somaPares);








/**
 * Retorne a pessoa mais velha
 */

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Leticia', idade: 19 },
    { nome: 'Rosana', idade: 64 },
    { nome: 'Wallace', idade: 47 },
];


const maisVelha = pessoas.reduce(function (acumulador, valor) {
    if (acumulador.idade > valor.idade) return acumulador;
    return valor;
});

console.log(maisVelha);







