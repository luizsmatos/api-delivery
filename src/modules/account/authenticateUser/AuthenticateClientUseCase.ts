import { prismaClient } from '../../../database/prismaClient';
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';

interface IAuthenticateClient {
  username: string;
  password: string;
}

export class AuthenticateClientUserCase {
  async execute({ username, password }: IAuthenticateClient) {
    const SECRET_KEY = process.env.SECRET_KEY as string;

    const client = await prismaClient.clients.findFirst({
      where: {
        username,
      },
    });

    if (!client) {
      throw new Error(`Client ${username} or password invalid!`);
    }

    const passwordMatch = await compare(password, client.password);

    if (!passwordMatch) {
      throw new Error(`Client ${username} or password invalid!`);
    }

    const token = sign({ username }, SECRET_KEY, {
      subject: client.id,
      expiresIn: '1d',
      algorithm: 'HS256',
    });

    return { token };
  }
}
