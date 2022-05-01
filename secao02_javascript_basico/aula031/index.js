
function saudacao(nome) {
    return `Bom dia, ${nome}!`;
}

const variavel = saudacao('Luiz');
console.log(variavel)

/** - - - - - - - - - - - - - - - - - - */

function soma(x = 1, y = 1) {
    const resultado = x + y;
    return resultado;
}

console.log(soma(2, 2));
console.log(soma(2, 3));
console.log(soma(2, 10));


const resultado = soma(4);
console.log(resultado);
/** - - - - - - - - - - - - - - - - - - */

const raiz = function (n) {
    return n ** 0.5;
};

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));
console.log(raiz(21));

const raiz_nova = n => n ** 0.5;

console.log(raiz_nova(9));
console.log(raiz_nova(16));
console.log(raiz_nova(25));
console.log(raiz_nova(21));