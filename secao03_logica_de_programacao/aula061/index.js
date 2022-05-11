/**
 * Escreva uma funcao chamada ePaisagem que recebe dois argumentos, largura
 * e altura de uma imagem (number).
 * Retorne se a imagem estiver no modo paisagem.
 */

function ePaisagem(largura, altura) {
    return (largura > altura) ? true : false;
}

// function ePaisagem2(largura, altura) => return (largura > altura) ? true : false;

const ePaisagem3 = (largura, altura) => (largura > altura) ? true : false;
const ePaisagem4 = (largura, altura) => (largura > altura);

console.log(ePaisagem4(1000, 200));