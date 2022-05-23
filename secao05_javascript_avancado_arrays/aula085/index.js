/**
 * Map - Mapeamento de Array
 */

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosEmDobro = numeros.map(function (valor) {
    return valor * 2;
});

const numerosEmDobro2 = numeros.map(valor => valor * 2);

console.log(numerosEmDobro2);
console.log();



/**
 * Exemplo 2
 */
// Para cada elemento:
//      Retorne apenas uma string com o valor da pessoa
//      Remova apenas a chave "nome" do objeto
//      Adiciona uma chave id em cada objeto

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Leticia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];


//      Retorne apenas uma string com o valor da pessoa
const nomes = pessoas.map(function (obj) {
    return obj.nome;
});

const nomes2 = pessoas.map(obj => obj.nome);

console.log(nomes2);


//      Remova apenas a chave "nome" do objeto
// const idades = pessoas.map(function (obj) {
//     delete obj.nome;
//     return obj;
// });
// console.log(idades);


const idades2 = pessoas.map(function (obj) {
    return { idade: obj.idade };
});
console.log(idades2);


const idades3 = pessoas.map(obj => ({ idade: obj.idade }));
// necessario utilizar parenteres () para poder retornar um objeto igual o da 
// linha acima.
console.log(idades3);

//      Adiciona uma chave id em cada objeto
const comIds = pessoas.map(function (obj, indice) {
    const newObj = { ...obj };
    newObj.id = (indice + 1) * 1000;
    return newObj;
});

console.log(pessoas);
console.log(comIds);