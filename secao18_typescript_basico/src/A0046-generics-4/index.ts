type ObterChaveFn = <O, K extends keyof O>(objeto: O, chave: K) => O[K];

const obterChave: ObterChaveFn = (objeto, chave) => objeto[chave];

const animal = {
  cor: 'Rosa',
  vacinas: ['Vacina 1', 'Vacina 2'],
  idade: 20,
};

const vacinas = obterChave(animal, 'vacinas');
const idadeA = obterChave(animal, 'idade');
const cor = obterChave(animal, 'cor');

console.log(vacinas, cor, idadeA);
