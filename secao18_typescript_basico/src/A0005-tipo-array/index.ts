// Array<T> <-> T[]

export function multiplicaArgs(...args: Array<number>): number {
  return args.reduce((ac, valor) => ac * valor, 1);
}

export function concatenaStrings(...args: string[]): string {
  return args.reduce((ac, valor) => ac + valor);
}

export function toUpperCase2(...args: string[]): string[] {
  return args.map((valor) => valor.toUpperCase());
}

const result = multiplicaArgs(1, 2, 4, 5, 7, 8);
const concatenacao = concatenaStrings('a', 'b', 'c ');

console.log(result);
console.log(concatenacao);
console.log(toUpperCase2('hgiusdfhgiosdf', 'fhsudi'));

export { result, concatenacao };
