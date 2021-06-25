import { NextFunction, Request, Response } from "express";

export function verifyAuthentication(request: Request, response: Response, next: NextFunction) {
  const token = request.headers.authorization;
  console.log(token);
  
  if (! token) {
    return response.status(401).end();
  }
  

  return next();
}