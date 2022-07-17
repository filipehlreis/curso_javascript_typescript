const { texto } = require('../base');
// (...( () ) )(...)(...) $1 $2 $3


const regExp1 = /João|Maria/gi;
const regExp2 = /João/gi;
const regExp3 = /(João|Maria)/gi;

// console.log(texto.match(regExp1))
// // console.log(texto.replace(regExp2, 'Felipe'))
// console.log(texto.replace(regExp3, '<b>$1</b>'))

// console.log(texto.replace(regExp3, function (input) {
//     return "###### " + input.toUpperCase() + " ############";
// }))