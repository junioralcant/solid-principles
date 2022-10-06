import { OrderGateway } from '../../gateways/order.gateway';
import { CreateOrderGatewayDTO } from '../../presenters/order/create-order.gateway.dto';

type OrderTypeInMemory = {
  id: string;
  document: string;
  total: number;
  createdAt: Date;
  facilityId: string;
};

export class OrderInMemory implements OrderGateway {
  orders: OrderTypeInMemory[] = [];

  async save(data: CreateOrderGatewayDTO): Promise<void> {
    this.orders.push(data);
  }
}
