/* 
    Não podemos criar constantes com palavras reservadas
    constantes precisam ter nomes significativos
    Não pode começar o nome de uma constante com um numero
    Não podem conter espacos ou tracos
    Utilizamos camelCase
    Case-sensitive
    Não podemos modificar o valor de uma constante
    NÃO UTILIZE VAR, UTILIZE CONST
*/

const nome = 'Joao';
console.log(nome);


const primeiroNumero = 5;
const segundoNumero = "  11";
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5;

console.log(resultado);
console.log(resultadoDuplicado);
console.log(resultadoTriplicado);

console.log(typeof segundoNumero)
// + - * /
