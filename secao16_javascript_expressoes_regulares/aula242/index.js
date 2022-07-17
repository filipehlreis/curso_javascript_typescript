const { alfabeto_texto } = require('../base');

/**

[abc]   ->  Conjunto
[^]     ->  negação
[0-9]   -> range, sempre do menor para o maior
[min-maxQUALQUERCOISA]
[^min-maxQUALQUERCOISA] -> Tudo menos isso


 */

console.log(alfabeto_texto);
// console.log(alfabeto_texto.match(/[abc123]+/g))
console.log(alfabeto_texto.match(/[0-9]+/g))
console.log(alfabeto_texto.match(/[a-k]+/g))
console.log(alfabeto_texto.match(/[A-Z]+/g))
console.log(alfabeto_texto.match(/[a-zA-Z0-9]+/g))
console.log(alfabeto_texto.match(/[^a-zA-Z0-9]+/g)) // -> negação
console.log(alfabeto_texto.match(/[\u00A0-\u00BA]+/g)) // -> unicode
console.log(alfabeto_texto.match(/[\w]+/g)) // -> 
console.log(alfabeto_texto.match(/[\W]+/g)) // -> 
console.log(alfabeto_texto.match(/[\d]+/g)) // -> 
console.log(alfabeto_texto.match(/[\D]+/g)) // -> 
console.log(alfabeto_texto.match(/[\s]+/g)) // -> 
console.log(alfabeto_texto.match(/[\S]+/g)) // -> 


