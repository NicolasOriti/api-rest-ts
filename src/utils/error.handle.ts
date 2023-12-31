import { Response } from 'express';

const handleHttpError = (res: Response, error: string, errorRaw?: any) => {
  console.log(errorRaw);
  res.status(500);
  res.json({ error, errorRaw });
};

export { handleHttpError };
