/**
 * defineProperty - defineProperties
 */

function Produto(nome, preco, estoque) {
    // this.nome = nome;
    // this.preco = preco;
    // this.estoque = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        value: estoque, // valor
        writable: false, // pode alterar ou nao
        configurable: true, // configuravel
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true, // mostra a chave
            value: nome, // valor
            writable: true, // pode alterar ou nao
            configurable: true, // configuravel
        },
        preco: {
            enumerable: true, // mostra a chave
            value: preco, // valor
            writable: true, // pode alterar ou nao
            configurable: true, // configuravel
        },
    });
}

const p1 = new Produto('Camiseta', 20, 3);
// p1.estoque = 50000;
// delete p1.estoque;
// console.log(p1);
console.log(Object.keys(p1));

for (let chave in p1) {
    console.log(chave);
}

