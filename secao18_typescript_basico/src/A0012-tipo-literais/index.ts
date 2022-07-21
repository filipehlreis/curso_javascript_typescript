let x = 10; //eslint-disable-line

x = 0b1010;
// x = 'Filipe';

const y = 10;
let a: 100 = 100; //eslint-disable-line
a = 120;

let b = 100 as const; //eslint-disable-line

const pessoa = {
  nome: 'Filipe' as const,
  sobrenome: 'Reis',
};

// pessoa.nome = 'Luiz';

console.log(a + y + b);

function escolhaCor2(cor: 'Vermelho' | 'Amarelo' | 'Azul'): string {
  return cor;
}

console.log(escolhaCor2('Vermelho'));

// Module mode
export default 1;
