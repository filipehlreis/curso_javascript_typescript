/**
&& -> false && true -> false 'o valor mesmo'
|| -> true || false -> vai retornar 'o valor verdadeiro'

FALSY
false
0
"" '' ``
null / undefined
NaN


 */

console.log('Luiz Otavio' && true && 'Maria');
console.log('Luiz Otavio' && true && NaN);

console.log('Luiz Otavio' && undefined && 'Maria');
console.log('Luiz Otavio' && '' && 'Maria');
console.log('Luiz Otavio' && NaN && 'Maria');
console.log();
console.log('x');


function falaOi() {
    return 'oi';
}

const vaiExecutar = false;

console.log(vaiExecutar && falaOi());




console.log(0 || false || null || 'luiz otavio' || true);



const corUsuario = null;
const corPadrao = corUsuario || 'preto';

console.log(corPadrao);
console.log(corPadrao);
console.log();
console.log();




const a = 0;
const b = null;
const c = 'false';
const d = false;
const e = NaN;

console.log(a || b || c || d || e)