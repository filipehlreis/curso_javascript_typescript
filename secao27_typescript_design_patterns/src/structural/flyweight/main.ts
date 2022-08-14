import { deliveryContext } from './delivery/delivery-context';
import { DeliveryFactory } from './delivery/delivery-factory';

const factory = new DeliveryFactory();
deliveryContext(factory, 'Filipe', '199B', 'Rua Brasil', 'SJC');
deliveryContext(factory, 'Joao', '192B', 'Rua Brasil', 'SJC');
deliveryContext(factory, 'Henrique', '11A', 'Rua Rosas', 'SJC');

console.log(factory.getLocations());
