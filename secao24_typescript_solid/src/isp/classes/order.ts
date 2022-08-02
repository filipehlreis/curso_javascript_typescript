import { OrderStatus } from './interfaces/order-status';
import { Messaging } from '../services/messaging';
import { Persistancy } from '../services/persistancy';
import { ShoppingCart } from './shopping-cart';

export class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    private readonly cart: ShoppingCart,
    private readonly messaging: Messaging,
    private readonly persistancy: Persistancy,
  ) {}

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log('Seu carrinho está vazio');
    }

    this._orderStatus = 'closed';
    this.messaging.sendMessage(
      `Seu pedido com total de R$${this.cart.totalWithDiscount()} foi recebido.`,
    );
    this.persistancy.saveOrder();
    this.cart.clear();
  }
}
