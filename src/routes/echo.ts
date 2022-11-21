import { Router, Response, Request } from 'express';
import { isAuthenticated } from '../config/passport';
import echoController from '../controllers/echo';

class EchoRouter {
  public router!: Router;

  constructor() {
    this.router = Router();

    this.router.get('/v1/echo', echoController.echo);
  }
}

export default new EchoRouter().router;
