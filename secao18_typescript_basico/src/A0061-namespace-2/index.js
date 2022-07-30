/* eslint-disable @typescript-eslint/no-namespace */
var MeuNamespace;
(function (MeuNamespace) {
  MeuNamespace.nomeDoNamespace = 'Filipe';
  var PessoaDoNamespace = /** @class */ (function () {
    function PessoaDoNamespace(nome) {
      this.nome = nome;
    }
    return PessoaDoNamespace;
  })();
  MeuNamespace.PessoaDoNamespace = PessoaDoNamespace;
  var pessoaDoNamespace = new PessoaDoNamespace('Filipe');
  console.log(pessoaDoNamespace);
  var OutroNamespace;
  (function (OutroNamespace) {
    OutroNamespace.nomeDoNamespace = 'Filipe 2';
  })(
    (OutroNamespace =
      MeuNamespace.OutroNamespace || (MeuNamespace.OutroNamespace = {})),
  );
})(MeuNamespace || (MeuNamespace = {}));
var pessoaDoNamespace = new MeuNamespace.PessoaDoNamespace('Filipe');
console.log(pessoaDoNamespace);
console.log(MeuNamespace.nomeDoNamespace);
console.log(MeuNamespace.OutroNamespace.nomeDoNamespace);
/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path="modulo/module.ts" />
console.log(MeuNamespace.nomeDoNamespace);
