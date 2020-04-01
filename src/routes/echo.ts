import { Router, Response, Request } from 'express';
import * as passportConfig from '../config/passport';
import echoController from '../controllers/echo';

class EchoRouter {
  public router!: Router;

  constructor() {
    this.router = Router();

    this.router.get('/echo/:message', passportConfig.isAuthenticated, echoController.echo);
  }
}

export default new EchoRouter().router;
