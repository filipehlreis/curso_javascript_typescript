const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};

// const nome = pessoa.nome;
// console.log(nome);


// Atribuicao via desestruturacao
const { nome: teste = 'Nao existe', sobrenome, idade } = pessoa;
console.log(teste, sobrenome, idade);


const { endereco: { rua: r = 123456, numero }, endereco } = pessoa;
console.log(r, numero);
console.log(endereco);

const { nome, ...resto } = pessoa;
console.log(nome, resto);