import { OrderGateway } from '../gateways/order.gateway';
import { CreateOrderUserCase } from '../useCases/order/crete-order.usecase';

type CreateOrderControllerRequest = {
  document: string;
  facilityId: string;
  total: number;
};

export class CreateOrderController {
  constructor(private orderGateway: OrderGateway) {}
  async handle(request: CreateOrderControllerRequest) {
    const createOrderUserCase = new CreateOrderUserCase(
      this.orderGateway
    );
    await createOrderUserCase.excute(request);
  }
}
