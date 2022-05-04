/**
 * Operadores Logicos
 * 
 * && -> AND -> E
 * || -> OR -> OU
 * ! -> NOT -> NÃO
 */

const expressao1 = true && true && true && true;
const expressao2 = true && true && false && true;

const expressao3 = true || true || false || true;

console.log(expressao1);
console.log(expressao2);
console.log(expressao3);
console.log();


const usuario_form = 'Luiz';
const senha_form = '123456';

const usuario_db = 'Luiz';
const senha_db = '123456';


const usuarioCerto = usuario_form === usuario_db;
const senhaCerto = senha_form === senha_db;

const vaiLogar = usuarioCerto && senhaCerto;
const naoVaiLogar = !(usuarioCerto && senhaCerto);

console.log('vai logar?', vaiLogar);
console.log('nao vai logar?', naoVaiLogar);


