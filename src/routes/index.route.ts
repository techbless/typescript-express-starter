import { Router, Response, Request } from "express";

import IndexController from "../controllers/index.controller";

class IndexRouter {
  public router!: Router;

  constructor() {
    this.router = Router();

    this.router.get("/", IndexController.index);
    this.router.post("/echo", IndexController.echo);
  }
}

export default new IndexRouter().router;
