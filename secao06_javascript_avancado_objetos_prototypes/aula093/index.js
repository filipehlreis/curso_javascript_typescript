/**
 * Prototypes
 */

/**
 * Javascript é baseado em prototipos para passar propriedades e metodos de um
 * objeto para outro.
 * 
 * Definicao de prototipo
 * Prototipo é o termo usado para se referir ao que foi criado pela primeira vez,
 * servindo de modelo ou molde para futuras producoes.
 * 
 * Todos os objetos tem uma referencia interna para um prototipo (__proto__)
 * que vem da propriedade prototype da funcao construtora que foi usada para
 * cria-lo. Quando tentamos acessar um membro de um objeto, primeiro o motor 
 * do JS vai tentar encontrar este membro no proprio objeto e depois a cadeia
 * de prototipos é usada atpe o topo (null) até encontrar (ou nao) tal membro.
 */

// Construtora -> molde (classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    // this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
}

// instancia
const pessoa1 = new Pessoa('Luiz', 'O.'); // <- Pessoa = Funcao construtora
const pessoa2 = new Pessoa('Maria', 'A.'); // <- Pessoa = Funcao construtora
const data = new Date(); // <- Pessoa = Funcao construtora

Pessoa.prototype.estouAqui = 'Hahhahaha';
Pessoa.prototype.nomeCompleto = function () {
    return this.nome + ' ' + this.sobrenome;
};

console.log(pessoa1);
console.log(data);

console.log(pessoa1.nomeCompleto());