/** FOR classico - geralmente com iteraveis (array, strings) */
/** FOR IN - retorna o indice ou chave, string, array ou objetos) */
/** FOR OF - retorna o valor em si (iteraveis,arrays ou strings) */

const nome = 'Luiz otavio';
const nome2 = ['Luiz', 'otavio', 'henrique', 'leite', 'miranda'];


for (let valor of nome) {
    console.log(valor);
}


for (let valor of nome2) {
    console.log(valor);
}


// for (let i in nome) {
//     console.log(nome[i]);
// }


// for (let i = 0; i < nome.length; i++) {
//     console.log(nome[i]);
// }

console.log('\n**********\n');

nome2.forEach(function (elemento, indice, array) {
    console.log(elemento, indice, array);
});


console.log('\n**********\n');

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30
}

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}


//
for (let valor of pessoa) {

}