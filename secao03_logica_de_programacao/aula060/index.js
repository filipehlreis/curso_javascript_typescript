// Escreva uma funcao que recebe 2 numeros e retorne o maior deles

function max(x, y) {
    if (x >= y) {
        return x;
    } else {
        return y;
    }
}

function max2(x, y) {
    return (x >= y) ? x : y;
}

const max3 = (x, y) => {
    return x > y ? x : y;
}

const max4 = (x, y) => x > y ? x : y;

console.log(max4(5, 10));