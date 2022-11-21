import { Request, Response } from 'express';

/**
 * This is a Test Controller, You should be delete
 */
class EchoController {
  public echo = (req: Request, res: Response) => {
    res.json({ yourMessage: req.query.message });
  };
}

export default new EchoController();
