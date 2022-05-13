/**
 * return
 * Retorna um valor
 * Termina a funcao
 */

function soma(a, b) {
    return a + b;
}

console.log(soma(5, 2));

function soma2(a, b) {
    console.log(a + b);
}


function criaPessoa(nome, sobrenome) {
    return { nome: nome, sobrenome: sobrenome };
}

const p1 = criaPessoa('Luiz', 'Otavio');
const p2 = {
    nome: 'Joao',
    sobrenome: 'Oliveira'
};

console.log(p1);
console.log(p2);




function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto;
    }
    return falaResto;
}

const olaMundo = falaFrase('oi');
console.log(olaMundo);



function duplica(n) {
    return n * 2;
}


function triplica(n) {
    return n * 3;
}


function quadriplica(n) {
    return n * 4;
}

function criaMultiplicador(multiplicador) {
    function multiplicador(n) {
        return n * multiplicador;
    }

    return multiplicador;
}


function criaMultiplicador2(multiplicador) {
    return function (n) {
        return n * multiplicador;
    }
}

const duplica2 = criaMultiplicador2(2);
const triplica2 = criaMultiplicador2(3);
const quadriplica2 = criaMultiplicador2(4);


console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));

console.log(duplica2(2));
console.log(triplica2(2));
console.log(quadriplica2(2));