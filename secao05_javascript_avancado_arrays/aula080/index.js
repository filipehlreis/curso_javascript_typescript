/**
 * Revisao do Basico em Arrays
 */

const nomes = ['Eduardo', 'Maria', 'Joana'];

nomes[2] = 'Joao';
console.log(nomes);

// delete nomes[2];
console.log(nomes);


/**
 * Strings, Objetos, Funcoes, Numero
 * É possivel encontrar dessa forma ao pesquisar, mas é muito pouco utilizado.
 */
const nomes2 = new Array('Eduardo', 'Maria', 'Joana');
console.log(nomes2);


/**
 * Valores por referencia
 */
const novo = nomes;
// novo.pop();
console.log(nomes);

console.log()
const novo2 = [...nomes];
novo2.pop();
console.log(novo2);
console.log(nomes);


/**
 * Arrays possuem atributos
 */
console.log(nomes.length);
const removido = nomes.pop();

console.log(nomes, removido);

const removido2 = nomes.shift();
console.log(nomes, removido2);

nomes.push('Joana');
console.log(nomes);
nomes.push('Wallace');
console.log(nomes);

/**
 * unshift para pequenos arrays é tranquilo, mas para grandes arrays, pode causar
 * problemas de performance.
 */
nomes.unshift('Fred');
nomes.unshift('Antonio');
console.log(nomes);

console.log()

const novo3 = nomes.slice(1, 3);
console.log(novo3);

const novo4 = nomes.slice(1, -1);
console.log(novo4);

/**
 * Converter uma string em uma array
 */
const nome = 'Luiz Otavio Miranda';
const nomes3 = nome.split(' ');
console.log(nomes3);


const nomes4 = ['Luiz', 'Otavio', 'Miranda'];
const nomes5 = nomes4.join(' ');
console.log(nomes5);