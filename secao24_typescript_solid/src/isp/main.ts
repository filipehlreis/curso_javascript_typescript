/**
Interface segregation principle (Principio da Segregacao de Interface)
Os clientes nao devem ser forçados a depender de types, interfaces ou membros
abstratas que nao utilizam.
 */

import { Messaging } from './services/messaging';
import { Order } from './classes/order';
import { Persistancy } from './services/persistancy';
import { Product } from './classes/product';
import { ShoppingCart } from './classes/shopping-cart';
// import { FiftyPercentDiscount, NoDiscount, TenPercentDiscount } from './classes/discount';
import { NoDiscount } from './classes/discount';
import { EnterpriseCustomer } from './classes/customer';
// import { IndividualCustomer } from './classes/customer';

// const fiftyPercentDiscount = new FiftyPercentDiscount();
// const tenPercentDiscount = new TenPercentDiscount();
const noDiscount = new NoDiscount();
const shoppingCart = new ShoppingCart(noDiscount);
const messaging = new Messaging();
const persistancy = new Persistancy();
// const individualCustomer = new IndividualCustomer(
//   'Filipe',
//   'Reis',
//   '111.111.111-11',
// );
const enterpriseCustomer = new EnterpriseCustomer(
  'Alegria e Ração',
  '460-68765.489',
);
const order = new Order(
  shoppingCart,
  messaging,
  persistancy,
  enterpriseCustomer,
);

shoppingCart.addItem(new Product('Camiseta', 49.9523));
shoppingCart.addItem(new Product('Caderno', 9.9));
shoppingCart.addItem(new Product('Lapis', 1.59));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());
console.log(order.orderStatus);
order.checkout();
console.log(shoppingCart.items);
console.log(order.orderStatus);
