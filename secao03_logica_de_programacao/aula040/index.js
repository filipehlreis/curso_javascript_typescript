/**
 * Entre 0 - 11 - Bom dia
 * Entre 12 - 17 - Boa tarde
 * Entre 18 - 23 - Boa noite
 */

const hora = 10;

// if (hora < 12) {
//     console.log('Bom dia!');
// }

/**
 * if pode ser utilizado sozinho
 * else sempre é precedido de if
 * sempre que utilizo a palavra else, preciso de um if antes
 * eu posso ter varios else ifs na checagem
 * so posso ter 1 else na checagem
 * podemos usar ndicoes sem else if, utilizando apenas if e else
 */


if (hora >= 0 && hora <= 11) {
    console.log('Bom dia!');
} else if (hora >= 12 && hora <= 17) {
    console.log('Boa tarde!');
} else if (hora >= 18 && hora <= 23) {
    console.log('Boa noite!');
} else {
    console.log('Insira uma hora valida 0-23.');
}


const tenhoGrana = false;

if (tenhoGrana) {
    console.log('Vou sair de casa');
} else {
    console.log('ficarei em casa mesmo.');
}