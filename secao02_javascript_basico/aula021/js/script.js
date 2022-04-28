/**
alert('Com a nossa mensagem.');
window.alert('mensagem');

window.confirm('Deseja realmente apagar?');

let nome = window.prompt('Digite o seu nome:');

alert(nome)

const confirma = confirm('Realmente deseja apagar?');

alert(confirma);
 */

let num1 = prompt('Digite um numero:');
let num2 = prompt('Digite outro numero:');
let resultado = (Number(num1) + Number(num2))
let texto = `O resultado foi ${resultado}!`;
alert(texto);