/**
 * Primitivos (imutaveis) - string, number, boolean, undefined, null (bigint, symbol)
 * Referencia (mutavel) - array, object, function
 */


// dados primitivos
let a = 'A';
let b = a; // copia, neste caso é realizado uma copia exata durante a atribuicao
console.log(a, b);

a = 'outra coisa';
console.log(a, b); // b nao é alterado pois foi feito alterado.


console.log();

// referencia
let c = [1, 2, 3];
let d = c; // faz uma copia por referencia, ou seja, ambas variaveis apontam 
//para o mesmo local da memoria.
console.log(c, d);

c.push(4); // por estar alterando um dado mutavel, ambas variaveis mostram
//que sao adicionados, visto qe ambos apontam para o mesmo local da memoria.
console.log(c, d); // 


d.pop(); // por estar alterando um dado mutavel, ambas variaveis mostram
//que sao adicionados, visto qe ambos apontam para o mesmo local da memoria.
console.log(c, d); // 


d = 'outra coisa' // como estou alterando um tipo de dado, de array para
// primitivo, apenas 1 variavel é alterada.
console.log(c, d); // 

let e = [...c];// copia profunda da array. não [e referencia]
c.push(2);

console.log(c, e);


const f = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
};

const g = f;

console.log(f, g);

f.nome = 'joao';
console.log(f, g);

const h = { ...f };
f.nome = 'Jorge';
console.log(f, g, h);
