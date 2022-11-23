import { Request, Response } from 'express';
import Controller from './controller';
/**
 * This is a Test Controller, You should be delete
 */
class EchoController extends Controller {
  public echo = (req: Request, res: Response) => {
    this.assertType(req.query, {
      message: 'String',
    });
    res.json({ yourMessage: req.query.message });
  };
}

export default new EchoController();
