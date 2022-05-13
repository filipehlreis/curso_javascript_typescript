/**
 * funcoes declaradas com a palavra 'function', possui uma variavel implicita
 * arguments e que sustenta todos os argumentos enviados 
 */
function funcao(a, b, c) {
    console.log('oi');
    console.log(arguments);
    console.log(arguments[10]);

    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }
    console.log(total, a, b, c);
}

funcao('valor', 1, 2, 3, 4, 5, 6, 7, 8, 9, 'Luiz');
funcao(1, 2, 3, 4, 5, 6, 7, 8, 9);


function funcao2(a, b = 2, c = 4, d, e, f) {
    console.log(a, b, c, d, e, f);
    console.log(a + b + c);
}

funcao2(1, 2, 3,);
funcao2(1);
funcao2(1, 10);
funcao2(1, undefined, 10);
funcao2(1, null, 10);


function funcao3({ nome, sobrenome, idade }) {
    console.log(nome, sobrenome, idade);
}

funcao3({ nome: 'Luiz', sobrenome: 'Otavio', idade: 30 })
let objeto = { nome: 'Luiz', sobrenome: 'Otavio', idade: 30 };
funcao3(objeto);


function funcao4([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3);
}
funcao4(['luiz otabio', 'miranda', 12]);


function conta(operador, acumulador, ...numeros) {
    console.log(operador, acumulador, numeros);
    for (let numero of numeros) {
        // console.log(numero)
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }

    console.log(acumulador);
}

// conta('+', 0, [10, 20, 30, 40]);
conta('-', 2, 10, 20, 30, 40);



const conta2 = function (operador, acumulador, ...numeros) {
    console.log(operador, acumulador, numeros);
    for (let numero of numeros) {
        // console.log(numero)
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }

    console.log(acumulador);
};

// conta('+', 0, [10, 20, 30, 40]);
conta2('+', 2, 10, 20, 30, 40);


/**
 * arrow function nao possui arguments
 */
const conta3 = (operador, acumulador, ...numeros) => {
    console.log(arguments);
}

const conta4 = (...args) => {
    console.log(args);
}

conta3('+', 2, 10, 20, 30, 40);
conta4('+', 2, 10, 20, 30, 40);