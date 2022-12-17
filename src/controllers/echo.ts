import { Request, Response } from 'express';
import Controller from './controller';
/**
 * This is a Test Controller, You should delete
 */
class EchoController extends Controller {
  public getEcho(req: Request, res: Response) {
    res.json({ yourMessage: req.query.message });
  }
}

export default new EchoController();
