
import { Request, Response } from 'express';
import { validationResult } from 'express-validator';

const validationErrorFunction = (res: Response, req: Request) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return errors.array();
  }
};

export { validationErrorFunction };