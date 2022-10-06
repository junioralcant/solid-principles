// Factory method
import { OrderInMemory } from '../database/order/order-inmemory';
import { CreateOrderController } from './create-order.controller';

const orderGateway = new OrderInMemory();
const createOrderFactory = new CreateOrderController(orderGateway);

export { createOrderFactory };
