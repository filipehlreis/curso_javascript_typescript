/**
 * Revisao de Objetos
 */

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otavio',
};

console.log(pessoa.nome);
console.log(pessoa.sobrenome);

// notacao com colchetes é interessante pois é possivel isnerir um valor
// dinamico. 
const chave = 'nome';
console.log(pessoa[chave]);
console.log(pessoa['sobrenome']);

console.log();


const pessoa1 = new Object();
pessoa1.nome = 'Filipe';
pessoa1.sobrenome = 'Henrique';
pessoa1.idade = 30;
pessoa1.falarNome = function () {
    return (`${this.nome} está falando seu nome.`);
};
pessoa1.getDataNascimento = function () {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
};


console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);

console.log(pessoa1);

// delete pessoa1.nome;
console.log(pessoa1);


pessoa1.falarNome();
console.log(pessoa1.getDataNascimento());
console.log()

for (let chave in pessoa1) {
    console.log(chave, pessoa1[chave]);
}




















// moldes para a constrcao de objetos
// Factory Functions / Constructor Functions / Classes
function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        }
    };
};


const p1 = criaPessoa('Luiz', 'Otavio');
console.log(p1.nomeCompleto);



function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this); // isto pode ser usado para travar o objeto, nao pode
    //alterar, nao pode modificar, nao pode adicionar, nao pode deletar.
}

const p2 = new Pessoa('Luiz', 'Miranda');
console.log(p2);

const p3 = new Pessoa('Maria', 'Miranda');
Object.freeze(p3); // travar um objeto para alteracao
p3.nome = 'Roberta';

console.log(p2, p3);




