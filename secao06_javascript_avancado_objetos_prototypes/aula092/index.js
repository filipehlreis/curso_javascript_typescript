/**
 * Object.values
 * Object.entries
 * Object.assign(des, any)
 * Object.getOwnPropertyDescriptor(o, 'prop')
 * ... (spread)
 * 
 * Já vimos:
 * Object.keys (retorna as chaves)
 * Object.freeze (congela o objeto)
 * Object.defineProperties (define varias propriedades)
 * Object.defineProperty (define uma propriedade)
*/



// const produto = { nome: 'Produto', preco: 1.8 };
// // const outraCoisa = produto; // isso vai fazer com que copie a referencia, 
// // e nao o objeto em si
// // const outraCoisa = { ...produto }; apenas vai copiar o objeto
// const caneca = {
//     // dessa forma irá alem de copiar, ira adicionar mais chaves
//     ...produto,
//     material: 'porcelana',
// };

// caneca.nome = 'Outro nome';
// caneca.preco = 2.5;
// console.log(produto);
// console.log(caneca);


// /**
//  * Object.assign()
//  * Faz a mesma coisa que ...spread, porem é menos intuitivo.
//  */

// const produto = { nome: 'Produto', preco: 1.8 };
// const caneca = Object.assign({}, produto, { material: 'porcelana' });

// caneca.nome = 'Outro nome';
// caneca.preco = 2.5;
// console.log(produto);
// console.log(caneca);


// /**
//  * Revisao de Object.freeze e Object.keys()
//  */
// const produto = { nome: 'Produto', preco: 1.8 };
// const caneca = Object.assign({}, produto, { material: 'porcelana' });

// console.log(Object.keys(produto));
// Object.freeze(produto);
// produto.nome = 'Outro Nome';
// console.log(produto);


// /**
//  * Object.getOwnPropertyDescriptor()
//  */
// const produto = { nome: 'Produto', preco: 1.8 };
// Object.defineProperty(produto, 'nome', {
//     writable: false,
//     configurable: false,
//     value: 'Qualquer outra coisa',
// });
// console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
// console.log(produto)



/**
 * Object.values()
 */
const produto = { nome: 'Produto', preco: 1.8 };
console.log(Object.values(produto));




/**
 * Object.entries()
 */
const produto2 = { nome: 'Produto', preco: 1.8, material: 'porcelana' };
console.log(Object.entries(produto2));

for (let [chave, valor] of Object.entries(produto2)) {
    console.log(chave, valor);
}



