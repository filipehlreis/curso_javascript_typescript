// import { CarFactory } from './factories/car-factory';

import { CarFactory } from './factories/car-factory';
import { ramdomCarAlgorithm } from './main/random-vehicle-algorithm';
import { randomNumbers } from './utils/random-numbers';

// const carFactory = new CarFactory();
// const fusca = carFactory.getVehicle('Fusca');
// fusca.pickUp('Joana');
// fusca.stop();

const carFactory = new CarFactory();
const customerNames = ['Ana', 'Joana', 'Helena', 'Joao', 'Jorge'];

for (let i = 0; i < 10; i++) {
  const vehicle = ramdomCarAlgorithm();
  const name = customerNames[randomNumbers(customerNames.length)];
  vehicle.pickUp(name);
  vehicle.stop();
  const newCar = carFactory.pickUp(name, `NOVO CARRO - ${randomNumbers(100)}`);
  newCar.stop();
  console.log('---');
}
