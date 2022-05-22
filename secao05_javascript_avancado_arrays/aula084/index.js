/**
 * Filter -> Sempre retornar um array com a mesma quantidade de elementos ou
 * menos
 */

/**
 * Aula que ensina a utilizar a função Filter para filtrar os arrays.
 * Professor deu bastante foco em arrow functions pois disse que é muito 
 * utilizado. Deu pra perceber o quao poderoso que é, e se assemelha muito
 * com dict/list comprehension em Python.
 */

// Retorn os numeros maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

/**
 * Funcao nao otimizada
 */
// function callbackFilter(valor, indice, array) {
//     if (valor > 10) {
//         return true;
//     } else {
//         return false;
//     }
// }

/**
 * Funcao otimizada
 */
function callbackFilter(valor) {
    return valor > 10;
}

const numerosFiltrados = numeros.filter(callbackFilter);


// metodo de construcao 2
const numerosFiltrados1 = numeros.filter(function (valor) {
    return valor > 10;
});


// metodo de construcao 3
const numerosFiltrados2 = numeros.filter((valor) => {
    return valor > 10;
});


// metodo de construcao 4
const numerosFiltrados3 = numeros.filter(valor => valor > 10);

console.log(numerosFiltrados3);




/**
 * Exemplo 2
 */

// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas co mais de 50 anos
// Retorne as pessoas cujo nome termina com a
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Leticia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
]


// Retorne as pessoas que tem o nome com 5 letras ou mais
const pessoasComNomeGrande = pessoas.filter(function (obj) {
    return obj.nome.length >= 5;
});

const pessoasComNomeGrande2 = pessoas.filter(obj => obj.nome.length >= 5);

console.log(pessoasComNomeGrande2);


// Retorne as pessoas com mais de 50 anos
const pessoasComMaisIdade = pessoas.filter(function (obj) {
    return obj.idade > 50;
});

const pessoasComMaisIdade2 = pessoas.filter(obj => obj.idade > 50);
console.log(pessoasComMaisIdade2);
console.log()


// Retorne as pessoas cujo nome termina com a
const pessoasComNomeFinalA = pessoas.filter(function (obj) {
    return obj.nome.toLowerCase().endsWith('a');
});

const pessoasComNomeFinalA2 = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'));

console.log(pessoasComNomeFinalA2);