const frutas = ['pera', 'maça', 'uva'];

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

console.log();


// for in -> le os indices ou chaves do objeto
for (let i in frutas) {
    console.log(frutas[i]);
}


console.log();

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30
}

console.log(pessoa.nome);
console.log(pessoa['nome']);

console.log();
for (let chave in pessoa) {
    console.log(chave);
}

console.log();

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}