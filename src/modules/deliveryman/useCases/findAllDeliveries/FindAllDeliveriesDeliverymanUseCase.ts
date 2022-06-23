import { prismaClient } from '../../../../database/prismaClient';

export class FindAllDeliveriesDeliverymanUseCase {
  async execute(id_delivery_man: string) {
    const deliveries = await prismaClient.deliveryMan.findMany({
      where: {
        id: id_delivery_man,
      },
      select: {
        id: true,
        username: true,
        deliveries: true,
      },
    });

    return deliveries;
  }
}
