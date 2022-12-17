import { Router, Response, Request } from 'express';
import echoController from '../controllers/echo';

class EchoRouter {
  public router!: Router;

  constructor() {
    this.router = Router();

    this.router.get('/v1/echo', echoController.getEcho);
  }
}

export default new EchoRouter().router;
