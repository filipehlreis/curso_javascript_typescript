const nome = 'Luiz Otavio';
console.log(nome[0]);

const alunos = ['Luiz', 'Maria', 'Joao',];

console.log(alunos);
console.log(alunos[0]);
console.log(alunos[0][0]);

alunos[0] = 'Eduardo'; // altera
console.log(alunos);

alunos[3] = 'Luiza';  //adiciona no fim
console.log(alunos);


alunos[alunos.length] = 'Lu'; //adiciona no fim
alunos[alunos.length] = 'Jorge'; //adiciona no fim
alunos[alunos.length] = 'Filipe'; //adiciona no fim
console.log(alunos);
console.log();


alunos.push('Fred'); //adiciona no fim
alunos.push('Fabio'); //adiciona no fim
console.log(alunos);
console.log();

alunos.unshift('Paula');
console.log(alunos);
console.log();

const removido = alunos.pop()
console.log(removido, alunos);
console.log();


const removido2 = alunos.shift()
console.log(removido2, alunos);
console.log();



delete alunos[1];
console.log(alunos);
console.log();


[alunos[0], alunos[2]] = [alunos[2], alunos[0]];

console.log(alunos);


console.log(alunos.slice(0, 7));
console.log(alunos.slice(0, -2));

console.log(typeof alunos);
console.log(alunos instanceof Array);

