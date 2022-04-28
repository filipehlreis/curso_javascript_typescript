/**
 * Tipos de dados: String, Number, Undefined, Null, Boolean, Symbol
 */

const nome = 'Filipe'; // String
const nome1 = "Filipe"; // String
const nome2 = `Filipe`; // String

const num1 = 10; // Number
const num2 = 10.52; // Number

let nomeAluno; // Undefined -> nao aponta pra local nenhum na memoria
let sobrenomeAluno = null; // Nulo -> nao aponta pra local nenhum na memoria

const aprovado = true; // Boolean = true, false

console.log(typeof num2, num2);

const a = [1, 2];
const b = a;

console.log(a, b);

b.push(3);
console.log(a, b);