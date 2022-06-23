import { prismaClient } from '../../../../database/prismaClient';

export class FindAllDeliveriesClientUseCase {
  async execute(id_client: string) {
    const deliveries = await prismaClient.clients.findMany({
      where: {
        id: id_client,
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
