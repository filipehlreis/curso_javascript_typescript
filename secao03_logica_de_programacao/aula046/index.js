/*
const data1 = new Date(0); // Date(0) = 01/01/1970 Timestamp unix ou epoca unix
console.log(data1.toString());

const data2 = new Date(); // Date(0) = 01/01/1970 Timestamp unix ou epoca unix
console.log(data2.toString());

const tresHoras = 60 * 60 * 3 * 1000;
const data3 = new Date(0 + tresHoras); // Date(0) = 01/01/1970 Timestamp unix ou epoca unix
console.log(data3.toString());

const umDia = 60 * 60 * 24 * 1000;
const data4 = new Date(0 + umDia + tresHoras);
console.log(data4.toString());
*/

/*
const data = new Date(2019, 3, 20, 15, 14, 27); // ano, mes, dia, hora, minuto, segundo, milisegundos
console.log(data.toString());
*/


/*
// const data = new Date('2019-04-20 20:20:59');
const data = new Date('2019-04-20T20:20:59.100');
console.log('Dia', data.getDate());
console.log('Mes', data.getMonth() + 1); // mes comeca do zero
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia semana', data.getDay()); // 0- Domingo, 6 - Sabado

console.log('', data.toString());

console.log(Date.now());
*/


function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
    const ano = zeroAEsquerda(data.getFullYear());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const dia = zeroAEsquerda(data.getDate());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);