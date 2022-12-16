import { Request, Response, NextFunction } from 'express';
import CustomError from '../custom_error.js';

function errorHandler(err: any, _req: Request, res: Response, _next: NextFunction) {
  let customError = err;

  if (!(err instanceof CustomError)) {
    if (process.env.NODE_ENV === 'development') {
      customError = new CustomError(
        500,
        err.name || 'Oh no, this is embarrassing. We are having troubles.',
        err.message || 'No additional information',
      );
    } else {
      customError = new CustomError(500, 'Server Error', 'No Additional Information');
    }
  }

  console.log(err);
  res.status(customError.status || 500);
  res.json(customError);
}

export default errorHandler;
