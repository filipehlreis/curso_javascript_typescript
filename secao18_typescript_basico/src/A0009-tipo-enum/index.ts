enum Cores {
  VERMELHO = 10,
  AZUL = 100,
  AMARELO = 200,
}

enum Cores {
  ROXO = 'ROXO',
  VERDE = 201, // necessario possuir algum numero apos ter usado alguma outra
  //coisa alem de numero
  ROSA,
}

// console.log(Cores);
console.log(Cores[0]);
console.log(Cores[10]);
console.log(Cores.AMARELO);
console.log(Cores);

function escolaACor(cor: Cores): void {
  console.log(Cores[cor]);
}

escolaACor(Cores.AMARELO);
escolaACor(123456);
