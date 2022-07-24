export class Pessoa {
  constructor(
    private nome: string,
    private sobrenome: string,
    private idade: number,
    private _cpf: string,
  ) {
    this._cpf = _cpf;
  }

  set cpf(cpf: string) {
    this._cpf = cpf;
  }

  get cpf(): string {
    return this._cpf.replace(/\D/g, '');
  }
}

const pessoa = new Pessoa('Filipe', 'Reis', 29, '122.546.789-00');

pessoa.cpf = '122.546.789-40';
console.log(pessoa.cpf);
