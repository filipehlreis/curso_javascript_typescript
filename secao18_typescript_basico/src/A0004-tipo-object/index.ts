const objetoA: {
  chaveA: string;
  chaveB: string;
  chaveC?: string;
  [key: string]: unknown;
} = {
  chaveA: 'valor a',
  chaveB: 'valor b',
};

objetoA.chaveA = 'outro valor';
objetoA.chaveC = 'um valor';
objetoA.chaveD = 'um valor';
objetoA.dddd = 'um valor';

console.log(objetoA);
