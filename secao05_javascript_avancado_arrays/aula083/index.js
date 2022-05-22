/**
 * Concatenacao de Arrays
 * Não funciona se voce utilizar o operador +, é necessario utilizar concat
 * ou utilizar o operador ... spread.
 */
const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
const a3 = a1.concat(a2);
const a4 = a1.concat(a2, [7, 8, 9], 'Luiz');

console.log(a3);
console.log(a4);

// ... rest -> ... spread
const a5 = [...a1, 'Luiz', ...a2, ...[7, 8, 9]];
console.log(a5);