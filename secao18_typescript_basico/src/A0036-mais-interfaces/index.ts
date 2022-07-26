// Declaration Merging

interface Pessoa {
  nome: string;
}

interface Pessoa {
  readonly sobrenome: string;
}

interface Pessoa {
  readonly enderecos: readonly string[];
}

interface Pessoa {
  idade?: number;
}

const pessoa: Pessoa = {
  nome: 'Filipe',
  sobrenome: 'Reis',
  enderecos: ['Av. Brasil'],
  idade: 30,
};

console.log(pessoa);
