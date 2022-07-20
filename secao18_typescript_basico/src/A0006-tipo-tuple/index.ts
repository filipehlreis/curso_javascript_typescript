// tuples
const dadosCliente1: [number, string] = [1, 'Luiz'];
const dadosCliente2: readonly [number, string, string] = [1, 'Luiz', 'Filipe'];
const dadosCliente3: [number, string, string?] = [1, 'Luiz'];
const dadosCliente4: [number, string, ...string[]] = [1, 'Luiz', 'Filipe'];

dadosCliente1[0] = 100;
dadosCliente1[1] = 'Carlos';

console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);
console.log(dadosCliente4);

// readonly array
const array1: readonly string[] = ['Filipe', 'Henrique'];
const array2: ReadonlyArray<string> = ['Filipe', 'Henrique'];
console.log(array1);
console.log(array2);
