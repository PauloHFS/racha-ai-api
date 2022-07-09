import { NextFunction } from 'express';

export const validation =
  (schema: any) => async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validate(req.body);
      next();
    } catch (error) {
      return res.status(400).send({ error });
    }
  };
