import { Request, Response } from 'express';
import { FindAllDeliveriesDeliverymanUseCase } from './FindAllDeliveriesDeliverymanUseCase';

export class FindAllDeliveriesDeliverymanController {
  async handle(request: Request, response: Response) {
    const { id_delivery_man } = request;

    const findAllDeliveriesDeliverymanUseCase =
      new FindAllDeliveriesDeliverymanUseCase();

    const deliveries = await findAllDeliveriesDeliverymanUseCase.execute(
      id_delivery_man,
    );

    return response.json(deliveries);
  }
}
