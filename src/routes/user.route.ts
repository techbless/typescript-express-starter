import { Router, Response, Request } from 'express';
import * as passport from 'passport';

import UserController from '../controllers/user.controller';

class UserRouter {
  public router!: Router;

  constructor() {
    this.router = Router();

    this.router.get('/register', UserController.getRegister);
    this.router.post('/register', UserController.postRegister);

    this.router.get('/login', UserController.getLogin);
    this.router.post('/login', UserController.postLogin);

    this.router.get('/logout', UserController.logout);
  }
}

export default new UserRouter().router;
