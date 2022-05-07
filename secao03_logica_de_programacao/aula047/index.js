// const data = new Date('1987-04-21 00:00:00');
// const diaSemana = data.getDay();
// let diaSemanaTexto;

// // utilizando diversos if else
// if (diaSemana === 0) {
//     diaSemanaTexto = 'Domingo';
// } else if (diaSemana === 1) {
//     diaSemanaTexto = 'Segunda-Feira';
// } else if (diaSemana === 2) {
//     diaSemanaTexto = 'Terça-Feira';
// } else if (diaSemana === 3) {
//     diaSemanaTexto = 'Quarta-Feira';
// } else if (diaSemana === 4) {
//     diaSemanaTexto = 'Quinta-Feira';
// } else if (diaSemana === 5) {
//     diaSemanaTexto = 'Sexta-Feira';
// } else if (diaSemana === 6) {
//     diaSemanaTexto = 'Sabado';
// } else {
//     diaSemanaTexto = '';
// }

// utilizando switch case


/*
switch (diaSemana) {
    case 0:
        diaSemanaTexto = 'Domingo';
        break;
    case 1:
        diaSemanaTexto = 'Segunda';
        break;
    case 2:
        diaSemanaTexto = 'Terca';
        break;
    case 3:
        diaSemanaTexto = 'Quarta';
        break;
    case 4:
        diaSemanaTexto = 'Quinta';
        break;
    case 5:
        diaSemanaTexto = 'Sexta';
        break;
    case 6:
        diaSemanaTexto = 'Sabado';
        break;
    default:
        diaSemanaTexto = '';
        break;

}

*/



function getDiaSemanaTexto(diaSemana) {
    // utilizando switch case
    switch (diaSemana) {
        case 0: return 'Domingo';
        case 1: return 'Segunda';
        case 2: return 'Terca';
        case 3: return 'Quarta';
        case 4: return 'Quinta';
        case 5: return 'Sexta';
        case 6: return 'Sabado';
        default: return '';
    }
}

const data = new Date('1987-04-21 00:00:00');
const diaSemana = data.getDay();
const diaSemanaTexto = getDiaSemanaTexto(diaSemana);

console.log(diaSemana, diaSemanaTexto);