/**
 * Escreva uma funcao que recebe um numero e retorne o seguinte:
 * Numero é divisivel por 3 = Fizz
 * Numero é divisivel por 5 = Buzz
 * numero é divisivel por 3 e 5 = FizzBuzz
 * numero NÃO é divisivel por 3 e 5 = Retorna o proprio numero
 * Checar se o numero é realmene um número = retorna o proprio numero
 * Use a função com números de 0 a 100
 */

function fizzBuzz(numero) {
    if (Number(numero) === NaN) return numero;
    if ((numero % 5 === 0) && (numero % 3 === 0)) return 'FizzBuzz';
    if (numero % 5 === 0) return 'Buzz';
    if (numero % 3 === 0) return 'Fizz';
    return numero;
}


for (let i = 0; i <= 100; i++) {
    console.log(fizzBuzz(i));

}