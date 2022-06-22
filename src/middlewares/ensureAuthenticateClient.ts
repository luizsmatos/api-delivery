import { verify } from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';

interface IPayload {
  sub: string;
}

export async function ensureAuthenticateClient(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.status(401).json({
      message: 'Token is required',
    });
  }

  const [, token] = authHeader.split(' ');
  const SECRET_KEY = process.env.SECRET_KEY_CLIENT as string;

  try {
    const { sub } = verify(token, SECRET_KEY) as IPayload;

    request.id_client = sub;

    return next();
  } catch (err) {
    return response.status(401).json({ message: 'Invalid token!' });
  }
}
