// const array = [1, 2, 3];
// array.push(4);
// array[0] = 'Luiz';
// // array = 'outra'; não é possivel atribuir quando é const
// console.log(array);



// const pessoa1 = {
//     nome: 'Luiz',
//     sobrenome: 'Miranda',
//     idade: 25,
// };


// const pessoa2 = {
//     nome: 'Maria',
//     sobrenome: 'Oliveira',
//     idade: 32,
// };

// console.log(pessoa1.nome);
// console.log(pessoa1.sobrenome);
// console.log(pessoa1.idade);

// console.log(pessoa2.nome);
// console.log(pessoa2.sobrenome);
// console.log(pessoa2.idade);




function criaPessoa(nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade,
    };
}


function criaPessoaReduzida(nome, sobrenome, idade) {
    return { nome, sobrenome, idade, };
}


const pessoa1 = criaPessoa('Luiz', 'Otavio', 23)
const pessoa2 = criaPessoa('Maria', 'Rebeca', 33)
const pessoa3 = criaPessoa('Jose', 'Silva', 51)
const pessoa4 = criaPessoa('Filipe', 'Reis', 29)
const pessoa5 = criaPessoa('Lucas', 'Rafael', 13)

console.log(pessoa1.nome)
console.log(pessoa2.nome)
console.log(pessoa3.nome)
console.log(pessoa4.nome)
console.log(pessoa5.nome)
console.log()



const pessoa6 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 26,

    fala() {
        console.log('Olá mundo!');
    },
    falaComSotaque() {
        console.log(`${this.nome} ${this.sobrenome} está falando com sotaque!`);
    },

    incrementaIdade() {
        this.idade++;
    },

    mostraIdade() {
        console.log(`${this.nome} tem ${this.idade} anos.`);
    },
};


pessoa6.fala();
pessoa6.falaComSotaque();
pessoa6.mostraIdade();
pessoa6.incrementaIdade();
pessoa6.incrementaIdade();
pessoa6.incrementaIdade();
pessoa6.mostraIdade();