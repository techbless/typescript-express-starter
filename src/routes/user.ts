import { Router, Response, Request } from 'express';

import UserController from '../controllers/user';
import wrapAsync from './async.wrapper';

class UserRouter {
  public router!: Router;

  constructor() {
    this.router = Router();

    this.router.post('/v1/register', wrapAsync(UserController.postRegister));
    this.router.post('/v1/login', wrapAsync(UserController.postLogin));

    this.router.get('/v1/logout', UserController.logout);
  }
}

export default new UserRouter().router;
