import { CreateOrderInputDTO } from '../../presenters/order/create-order.input.tdo';
import { Order } from './order.entity';

export class CreateOrderUserCase {
  excute({ document, total, facilityId }: CreateOrderInputDTO) {
    const orderCreate = Order.create(document, total, facilityId);
  }
}
