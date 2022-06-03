// const nome = 'Filipe';
// const sobrenome = 'Henrique';
// const idade = 30;

// function soma(x, y) {
//     return x + y;
// }

// export { nome as nome2, sobrenome, idade, soma };



// export const nome = 'Filipe';
// export const sobrenome = 'Henrique';
// export const idade = 30;
// const cpf = 'fhsdiuf'; // acaba sendo considerado como uma variavel privada desse modulo

// export default function soma(x, y) {
//     return x + y;
// }

// export class Pessoa {
//     constructor(nome, sobrenome) {
//         this.nome = nome;
//         this.sobrenome = sobrenome;
//     }
// }






// const nome = 'Filipe';
// const sobrenome = 'Henrique';
// const idade = 30;


// function soma(x, y) {
//     return x + y;
// }

// export default (x, y) => x * y;

// export { nome, sobrenome, idade, soma };


// Geralmente teremos as coisas exportando desse jeito:
export const nome = 'Filipe';
export const sobrenome = 'Henrique';
export const idade = 30;


export function soma(x, y) {
    return x + y;
}

export default class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}