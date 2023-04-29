import { Request, Response, NextFunction } from 'express';

class HttpError extends Error {
    status: number;
  
    constructor(message: string, status: number) {
      super(message);
      this.status = status;
    }
}

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  const status = err instanceof HttpError ? err.status : 500;
  const message = err.message || 'Internal Server Error';
  res.status(status).json({ error: message });
}