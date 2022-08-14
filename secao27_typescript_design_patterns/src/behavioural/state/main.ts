import { ShoppingOrder } from './shopping-order/shopping-order';

const order = new ShoppingOrder();
order.approvePayment(); // Aprovado
order.waitPayment(); // Pendente
order.waitPayment(); // Pendente
order.shipOrder(); //
order.rejectPayment(); // Daqui nao altera mais o estado
order.approvePayment(); // n
order.waitPayment(); // n
order.approvePayment(); // n
order.shipOrder(); // n
