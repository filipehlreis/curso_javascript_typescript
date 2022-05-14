/**
 * Factory Function
 * Constructor function (funcao construtora)
 */

function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,

        // getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },

        // setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },

        fala: function (assunto = 'falando sobre NADA') {
            return `${this.nome} está ${assunto}.`;
        },
        informaPeso: function () {
            return `${this.nome} está informando o peso de ${this.peso} kg`;
        },
        peso: peso,
        altura: altura,
        // getter
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Luiz', 'Otavio', 1.8, 80);
const p2 = criaPessoa('Maria', 'Joaquinha', 1.6, 42);

console.log(p1.fala('falando sobre JS'));

console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.imc);
console.log(p1.nomeCompleto);
p1.nomeCompleto = 'Joao Filipe de Oliveira';
console.log(p1.nomeCompleto);
console.log(p1.fala());

