/**
 * Constructor Functions -> objetos
 * Funcao Fabrica -> objetos
 * 
 * Funcao fabrica -> criaPessoa
 * Construtora -> Pessoa (new)
 */



function Pessoa(nome, sobrenome) {
    //Atributos ou metodos privados
    const ID = 123456;
    const metodoInterno = function () {

    };

    // Atributos ou metodos publicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function () {
        console.log(this.nome + ': sou um metodo.');
    };

}

const p1 = new Pessoa('Luiz', 'Otavio');
const p2 = new Pessoa('Maria', 'Oliveira');


console.log(p1.nome);
p2.metodo();
