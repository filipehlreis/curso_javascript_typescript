/**
 * Aritmeticos
 * + Adicao / Concatenacao
 * - / * 
 * ** = potenciacao
 * % = resto da divisao
 */

/*

Precedencias
()
**
* / %
+ -

Incremento = ++
Decremento = --

Operadores de atribuicao:
+=
-=
/=
*=
**=



*/



const num1 = 5;
const num2 = 10;
console.log(num1 + num2)

const num3 = '5';
const num4 = 10;
console.log(num3 + num4);

console.log(num1 - num2);
console.log(num1 / num2);
console.log(num1 * num2);
console.log(num1 ** num2);
console.log(num1 % num2);

console.log((num1 + num2) * num4);

let contador = 1;
contador++;
++contador;
contador++;
contador++;
console.log(contador);
console.log();

const passo = 2;
contador = contador + 2;
console.log(contador);

contador = contador + passo;
console.log(contador);

contador += passo;
console.log(contador);
console.log();


const numm1 = 10;
const numm2 = parseInt('5');
const numm3 = parseFloat('5');
const numm4 = Number('5');
console.log(numm1 + numm2);

