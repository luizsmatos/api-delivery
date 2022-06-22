import { Request, Response } from 'express';
import { UpdateDeliverymanUseCase } from './UpdateDeliverymanUseCase';

export class UpdateDeliverymanController {
  async handle(request: Request, response: Response) {
    const { id_delivery_man } = request;
    const { id: id_delivery } = request.params;
    const updateDeliverymanUseCase = new UpdateDeliverymanUseCase();

    const deliveries = await updateDeliverymanUseCase.execute({
      id_delivery_man,
      id_delivery,
    });

    return response.json(deliveries);
  }
}
