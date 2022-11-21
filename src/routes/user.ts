import { Router, Response, Request } from 'express';

import UserController from '../controllers/user';

class UserRouter {
  public router!: Router;

  constructor() {
    this.router = Router();

    this.router.post('/v1/register', UserController.postRegister);
    this.router.post('/v1/login', UserController.postLogin);

    this.router.get('/v1/logout', UserController.logout);
  }
}

export default new UserRouter().router;
