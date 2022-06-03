// --------------------------------------------------------------------------
// import { nome2, sobrenome, idade, soma, Pessoa } from "./modulo1";

// console.log(nome2, sobrenome, idade);
// console.log(soma(2, 4));

// const p1 = new Pessoa('Luiz', 'Otavio');
// console.log(p1);
// --------------------------------------------------------------------------


// --------------------------------------------------------------------------
// import * as MeuModulo from "./modulo1";

// console.log(MeuModulo.nome, MeuModulo.sobrenome, MeuModulo.idade);
// console.log(MeuModulo.soma(2, 4));

// const p1 = new MeuModulo.Pessoa('Luiz', 'Otavio');
// console.log(p1);
// --------------------------------------------------------------------------


// --------------------------------------------------------------------------
// import qualquerNome from "./modulo1";

// console.log(qualquerNome(2, 4));
// --------------------------------------------------------------------------


// // --------------------------------------------------------------------------
// import multiplica, { nome, sobrenome, idade, soma } from "./modulo1";

// console.log(multiplica(2, 5));
// console.log(nome, sobrenome, idade, soma(2, 3));
// // --------------------------------------------------------------------------

// --------------------------------------------------------------------------
// Geralmente teremos assim no dia a dia:
import Pessoa, { nome, sobrenome } from "./modulo1";

const p1 = new Pessoa(nome, sobrenome);
console.log(p1);
// --------------------------------------------------------------------------