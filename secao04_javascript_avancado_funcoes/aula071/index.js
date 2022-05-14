/**
 * Escopo Lexico
 */

const nome = 'Luiz';

function falaNome() {
    console.log(nome);
}

falaNome();

function usaFalaNome() {
    const nome = 'Otavio';
    falaNome();
}

usaFalaNome();