import { prismaClient } from '../../../../database/prismaClient';

interface IUpdateDeliveryman {
  id_delivery_man: string;
  id_delivery: string;
}

export class UpdateDeliverymanUseCase {
  async execute({ id_delivery_man, id_delivery }: IUpdateDeliveryman) {
    const result = await prismaClient.deliveries.update({
      where: {
        id: id_delivery,
      },
      data: {
        id_delivery_man,
      },
    });

    return result;
  }
}
