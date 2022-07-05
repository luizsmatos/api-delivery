import { prismaClient } from '../../../../database/prismaClient';
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';

interface IAuthenticateDeliveryman {
  username: string;
  password: string;
}

export class AuthenticateDeliverymanUserCase {
  async execute({ username, password }: IAuthenticateDeliveryman) {
    const SECRET_KEY = process.env.SECRET_KEY_DELIVERYMAN as string;

    const deliveryman = await prismaClient.deliveryMan.findFirst({
      where: {
        username,
      },
    });

    if (!deliveryman) {
      throw new Error(`Deliveryman ${username} or password invalid!`);
    }

    const passwordMatch = await compare(password, deliveryman.password);

    if (!passwordMatch) {
      throw new Error(`Deliveryman ${username} or password invalid!`);
    }

    const token = sign({ username }, SECRET_KEY, {
      subject: deliveryman.id,
      expiresIn: '1d',
      algorithm: 'HS256',
    });

    return { token };
  }
}
