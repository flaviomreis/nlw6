import 'reflect-metadata';
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';

import { router } from './routes';
import './database';

const app = express();

app.use(express.json());

app.use(router);

app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
  if (error instanceof Error) {
    return response.status(400).json({
      error: error.message
    });
  }

  return response.status(500).json({
    status: "500",
    message: "Internal server error"
  });
});

app.listen(3000, () => console.log('Nodejs server is listening on TCP port 3000'));