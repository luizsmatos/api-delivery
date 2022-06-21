import { prismaClient } from '../../../../database/prismaClient';

interface IClientDelivery {
  item_name: string;
  id_client: string;
}

export class CreateDeliveryUseCase {
  async execute({ id_client, item_name }: IClientDelivery) {
    const delivery = await prismaClient.deliveries.create({
      data: {
        id_client,
        item_name,
      },
    });

    return delivery;
  }
}
