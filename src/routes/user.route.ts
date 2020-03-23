import { Router, Response, Request } from 'express';

import UserController from '../controllers/user.controller';
import wrapAsync from './async.wrapper';

class UserRouter {
  public router!: Router;

  constructor() {
    this.router = Router();

    this.router.get('/register', UserController.getRegister);
    this.router.post('/register', wrapAsync(UserController.postRegister));

    this.router.get('/login', UserController.getLogin);
    this.router.post('/login', wrapAsync(UserController.postLogin));

    this.router.get('/logout', UserController.logout);
  }
}

export default new UserRouter().router;
