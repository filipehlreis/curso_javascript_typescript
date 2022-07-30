/* eslint-disable @typescript-eslint/no-namespace */
namespace MeuNamespace {
  export const nomeDoNamespace = 'Filipe';

  export class PessoaDoNamespace {
    constructor(public nome: string) {}
  }

  const pessoaDoNamespace = new PessoaDoNamespace('Filipe');
  console.log(pessoaDoNamespace);

  export namespace OutroNamespace {
    export const nomeDoNamespace = 'Filipe 2';
  }
}

const pessoaDoNamespace = new MeuNamespace.PessoaDoNamespace('Filipe');
console.log(pessoaDoNamespace);
console.log(MeuNamespace.nomeDoNamespace);
console.log(MeuNamespace.OutroNamespace.nomeDoNamespace);
