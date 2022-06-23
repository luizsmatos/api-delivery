import { prismaClient } from '../../../../database/prismaClient';

interface IUpdateStatusDelivery {
  id_delivery: string;
  id_delivery_man: string;
}

export class UpdateStatusDeliveryUseCase {
  async execute({ id_delivery, id_delivery_man }: IUpdateStatusDelivery) {
    const result = await prismaClient.deliveries.updateMany({
      where: {
        id: id_delivery,
        id_delivery_man,
      },
      data: {
        end_at: new Date(),
      },
    });

    if (!result.count) {
      throw new Error(`Deliveryman or delivery invalid!`);
    }

    return { message: 'Delivery updated successfully'}
  }
}
