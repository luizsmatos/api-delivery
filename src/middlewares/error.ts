import { Prisma } from '@prisma/client';
import { NextFunction, Request, Response } from 'express';

export default (
  error: unknown,
  _request: Request,
  response: Response,
  _next: NextFunction,
) => {
  if (error instanceof Error) {
    return response.status(400).json({ error: error.message });
  }

  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    return response
      .status(400)
      .json({ error: error.message, code: error.code });
  }

  return response
    .status(500)
    .json({ status: 'error', message: 'Internal Server Error' });
};
