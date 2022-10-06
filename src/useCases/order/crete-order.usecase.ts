import { OrderGateway } from '../../gateways/order.gateway';
import { CreateOrderInputDTO } from '../../presenters/order/create-order.input.tdo';
import { Order } from './order.entity';

export class CreateOrderUserCase {
  constructor(private orderGateway: OrderGateway) {}
  async excute({ document, total, facilityId }: CreateOrderInputDTO) {
    const orderCreate = Order.create(document, total, facilityId);

    await this.orderGateway.save(orderCreate);
  }
}
