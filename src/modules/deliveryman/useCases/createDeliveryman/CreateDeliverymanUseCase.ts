import { hash } from 'bcrypt';
import { prismaClient } from '../../../../database/prismaClient';

interface ICreateDeliveryman {
  username: string;
  password: string;
}

export class CreateDeliverymanUseCase {
  async execute({ username, password }: ICreateDeliveryman) {
    const deliverymanExist = await prismaClient.deliveryMan.findFirst({
      where: {
        username: {
          equals: username,
          mode: 'insensitive',
        },
      },
    });

    if (deliverymanExist) {
      throw new Error('Deliveryman already exists');
    }

    const hashPassword = await hash(password, 10);

    const deliveryman = await prismaClient.deliveryMan.create({
      data: {
        username,
        password: hashPassword,
      },
      select: {
        id: true,
        username: true,
      },
    });

    return deliveryman;
  }
}
