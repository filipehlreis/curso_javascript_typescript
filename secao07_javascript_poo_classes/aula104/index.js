/**
 * Heranças em Classes
 */

class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if (this.ligado) {
            console.log(this.nome + ' já ligado.');
            return;
        }
        console.log(this.nome + ' ligando.');
        this.ligado = true;
    }

    desligar() {
        if (!this.ligado) {
            console.log(this.nome + ' já desligado.');
            return;
        }
        console.log(this.nome + ' desligando.');
        this.ligado = false;
    }
}

const d1 = new DispositivoEletronico('TV');
d1.desligar();
d1.ligar();
d1.ligar();
d1.ligar();


class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
}

const s1 = new Smartphone('Samsung', 'Preto', 'Galaxy S10');
s1.ligar();
s1.ligar();
console.log(s1);



class Tablet extends DispositivoEletronico {
    constructor(nome, temWifi) {
        super(nome);
        this.temWifi = temWifi;
    }

    ligar() {
        console.log('Olha, voce alterou o metodo ligar.');
    }

    falaOi() {
        console.log('oi');
    }
}

const t1 = new Tablet('Galaxy Tab S20', true);
console.log(t1);
t1.ligar();
t1.desligar();
t1.falaOi();