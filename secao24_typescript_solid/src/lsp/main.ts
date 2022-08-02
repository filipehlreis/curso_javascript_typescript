/**
 Liskov Substitution Principle

 Mais simples: Subtipos precisam ser substituiveis por seus tipos de base.
 Mais simples ainda: Se meu programa espera um Animal, algo do tipo Cachorro
 (que herda de Animal) deve servir como qualquer outro Animal.
 */

import { Messaging } from './services/messaging';
import { Order } from './classes/order';
import { Persistancy } from './services/persistancy';
import { Product } from './classes/product';
import { ShoppingCart } from './classes/shopping-cart';
// import { FiftyPercentDiscount, NoDiscount, TenPercentDiscount } from './classes/discount';
import { NoDiscount } from './classes/discount';

// const fiftyPercentDiscount = new FiftyPercentDiscount();
// const tenPercentDiscount = new TenPercentDiscount();
const noDiscount = new NoDiscount();
const shoppingCart = new ShoppingCart(noDiscount);
const messaging = new Messaging();
const persistancy = new Persistancy();
const order = new Order(shoppingCart, messaging, persistancy);

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
