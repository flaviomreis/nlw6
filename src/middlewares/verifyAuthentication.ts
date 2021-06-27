import { NextFunction, Request, Response } from "express";
import { Crypt } from "../utils/Crypt";

export function verifyAuthentication(request: Request, response: Response, next: NextFunction) {
  const authToken = request.headers.authorization;
  
  if (! authToken) {
    return response.status(401).end();
  }

  const [, token] = authToken.split(' ');

  const { sub } = Crypt.verify(token)

  if (! sub) {
    return response.status(401).end();
  }

  request.user_id = sub.toString();
  
  return next();
}