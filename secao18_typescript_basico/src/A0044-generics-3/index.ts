interface PessoaProtocolo<T = string, U = number> {
  nome: T;
  sobrenome: T;
  idade: U;
}
type PessoaProtocolo2<T = string, U = number> = {
  nome: T;
  sobrenome: T;
  idade: U;
};

const aluno1: PessoaProtocolo<string, number> = {
  nome: 'Filipe',
  sobrenome: 'Reis',
  idade: 30,
};

const aluno2: PessoaProtocolo<number, number> = {
  nome: 1234,
  sobrenome: 7894,
  idade: 30,
};

const aluno3: PessoaProtocolo = {
  nome: 'Nome3',
  sobrenome: 'Sobrenome3',
  idade: 30,
};

const aluno4: PessoaProtocolo2 = {
  nome: 'Nome3',
  sobrenome: 'Sobrenome3',
  idade: 30,
};

console.log(aluno1);
console.log(aluno2);
console.log(aluno3);
console.log(aluno4);
