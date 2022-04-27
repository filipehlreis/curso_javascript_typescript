/**
 * Filipe Henrique Reis tem 29 anos, pesa 73 kg
 * tem 1.73 de altura e seu IMC é de 25.9259259259259254
 * Filipe Henrique nasceu em 1992.
 */

const nome = 'Filipe Henrique';
const sobrenome = 'Reis';
const idade = 29;
const peso = 73;
const altura = 1.73;

let imc;
imc = peso / (altura * altura);

let anoNascimento;
anoNascimento = 2021 - idade;

console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg.');
console.log('Tem', altura, 'de altura e seu IMC é de', imc);
console.log(nome + ' nasceu em  ' + anoNascimento + '.');

console.log();
console.log(`Tem ${altura} de altura e seu IMC é de ${imc}. `);