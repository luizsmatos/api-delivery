import { Prisma } from '@prisma/client';
import { Request, Response } from 'express';
import { CreateClientUseCase } from './CreateClientUseCase';

export class CreateClientController {
  async handle(request: Request, response: Response) {
    const { username, password } = request.body;

    try {
      const createClientUseCase = new CreateClientUseCase();

      const client = await createClientUseCase.execute({
        username,
        password,
      });

      return response.json(client);
    } catch (error: unknown) {
      if (error instanceof Error) {
        response.status(400).json({ error: error.message });
      }

      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        return response.status(400).json({ error: error.message, code: error.code });
      }
    }
  }
}
