export function funcao(this: Date, argumento1: string, age: number): void {
  console.log(this);
  console.log(argumento1, age);
}

funcao.call(new Date(), 'Filipe', 28);
funcao.apply(new Date(), ['Filipe', 28]);
