// console.log('Linha 0');
// console.log('Linha 1');
// console.log('Linha 2');
// console.log('Linha 3');
// console.log('Linha 4');
// console.log('Linha 5');

for (let i = 400; i <= 500; i += 10) {
    console.log(`Linha ${i}`);
}

console.log();

for (let i = 500; i >= 400; i -= 10) {
    console.log(`Linha ${i}`);
}

console.log();

for (let i = 0; i <= 10; i++) {
    const par = i % 2 === 0 ? 'par' : 'impar';
    console.log(i, par);
}


console.log();
console.log();
const frutas = ['Maça', 'Pera', 'Uva'];

for (let i = 0; i < frutas.length; i++) {
    console.log(`Indice ${i}:`, frutas[i]);
}


const nomes = [
    'Maça',
    'Pera',
    'Abacaxi',
    'Chuchu',
    'Morango',
    'Beringela',
    'Laranja',
    'Limao',
    'Uva',
    'Caqui',
    'Caju',
    'Kiwi',
]

for (let i = 0; i < nomes.length; i++) {
    console.log(`Indice ${i}:`, nomes[i]);
}