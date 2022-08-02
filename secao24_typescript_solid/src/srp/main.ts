import { Messaging } from './services/messaging';
import { Order } from './entities/order';
import { Persistancy } from './services/persistancy';
import { Product } from './entities/product';
import { ShoppingCart } from './entities/shopping-cart';

const shoppingCart = new ShoppingCart();
const messaging = new Messaging();
const persistancy = new Persistancy();
const order = new Order(shoppingCart, messaging, persistancy);

shoppingCart.addItem(new Product('Camiseta', 49.9523));
shoppingCart.addItem(new Product('Caderno', 9.9));
shoppingCart.addItem(new Product('Lapis', 1.59));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(order.orderStatus);
order.checkout();
console.log(shoppingCart.items);
console.log(order.orderStatus);
