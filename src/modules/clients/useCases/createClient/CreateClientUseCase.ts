import { hash } from 'bcrypt';
import { prismaClient } from '../../../../database/prismaClient';

interface ICreateClient {
  username: string;
  password: string;
}

export class CreateClientUseCase {
  async execute({ username, password }: ICreateClient) {
    const clientExist = await prismaClient.clients.findFirst({
      where: {
        username: {
          equals: username,
          mode: 'insensitive',
        },
      },
      select: {
        id: true,
        username: true,
      },
    });

    if (clientExist) {
      throw new Error('Client already exists');
    }

    const hashPassword = await hash(password, 10);

    const client = await prismaClient.clients.create({
      data: {
        username,
        password: hashPassword,
      },
      select: {
        id: true,
        username: true,
      },
    });

    return client;
  }
}
