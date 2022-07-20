function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}
semRetorno('oi', 'Luis', 'Carlos');

const pessoa = {
  nome: 'Filipe',
  sobrenome: 'Henrique',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

pessoa.exibirNome();

export { pessoa };
