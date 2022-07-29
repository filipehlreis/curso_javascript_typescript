interface Constructor {
  new (...args: any[]): any;
}

function inverteNomeECor(param1: string, param2: string) {
  // Closure
  return function (target: Constructor): any {
    console.log('Sou o decorador e recebi', target);

    return class extends target {
      cor: string;

      constructor(...args: any[]) {
        super(...args);
        // this.cor = 'Qualquer coisa';
        this.nome = this.inverte(args[0]);
        this.cor = this.inverte(args[1]);
      }

      inverte(valor: string): string {
        return valor.split('').reverse().join('') + ' ' + param1 + ' ' + param2;
      }
    };
  };
}

function outroDecorator(param1: string) {
  return function (target: Constructor) {
    console.log('Sou o outro decorator :' + param1);
    return target;
  };
}

@outroDecorator('o parametro do outro decorator') // 2
@inverteNomeECor('Valor 1', 'Valor 2') // 1
export class Animal {
  constructor(public nome: string, public cor: string) {
    console.log('Sou a classe');
  }
}

// //
const animal = new Animal('Filipe', 'roxo');
console.log(animal);
