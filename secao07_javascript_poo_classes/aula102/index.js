/**
 * Criando Classes
 */

class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() {
        console.log(`${this.nome} está falando.`);
    }
    comer() {
        console.log(`${this.nome} está comendo.`);
    }
    beber() {
        console.log(`${this.nome} está bebendo.`);
    }
}

const p1 = new Pessoa('Luiz', 'Miranda');
// const p2 = new Pessoa('Maria', 'Otavio');
// const p3 = new Pessoa('Jonas', 'Henrique');
// const p4 = new Pessoa('Rafael', 'Reis');

console.log(p1);
// console.log(p2);
// console.log(p3);
// console.log(p4);


function Pessoa2(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function () {
    console.log(`${this.nome} está falando.`);
};


const p5 = new Pessoa2('Luiz', 'Miranda');
// const p6 = new Pessoa2('Maria', 'Otavio');
// const p7 = new Pessoa2('Jonas', 'Henrique');
// const p8 = new Pessoa2('Rafael', 'Reis');
console.log(p5)