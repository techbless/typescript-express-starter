import { Router, Response, Request } from 'express';
import * as passportConfig from '../config/passport';
import IndexController from '../controllers/index.controller';

class IndexRouter {
  public router!: Router;

  constructor() {
    this.router = Router();

    this.router.get('/', IndexController.index);
  }
}

export default new IndexRouter().router;
