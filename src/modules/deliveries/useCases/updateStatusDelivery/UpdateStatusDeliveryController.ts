import { Request, Response } from 'express';
import { UpdateStatusDeliveryUseCase } from './UpdateStatusDeliveryUseCase';

export class UpdateStatusDeliveryController {
  async handle(request: Request, response: Response) {
    const { id: id_delivery } = request.params;
    const { id_delivery_man } = request;

    const updateStatusDeliveryUseCase = new UpdateStatusDeliveryUseCase();

    const delivery = await updateStatusDeliveryUseCase.execute({
      id_delivery,
      id_delivery_man,
    });

    return response.json(delivery);
  }
}
