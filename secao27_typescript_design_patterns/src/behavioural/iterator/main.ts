import { MyDataStructure } from './my-data-structure';
import { MyReverseIterator } from './my-reverse-iterator';

const dataStructure = new MyDataStructure();
dataStructure.addItem('A', 'B', 'C', 'D', 'E', 'F');
console.log(dataStructure);

const [a, b] = dataStructure;

console.log('ROUBADOS:', a, b);
console.log('Executei varias coisas e depois usei o iterator');
const [c, ...rest] = dataStructure;
console.log(c, rest);

dataStructure.resetIterator();
for (const data of dataStructure) {
  console.log(data);
}

console.log();
dataStructure.changeIterator(new MyReverseIterator(dataStructure));

for (const data of dataStructure) {
  console.log(data);
}
console.log();

console.log('AQUI EU PRECISO ZERAR O ITERATOR');
dataStructure.resetIterator();
for (const data of dataStructure) {
  console.log(data);
}
console.log();
