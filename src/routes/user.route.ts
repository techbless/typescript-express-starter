import { Router, Response, Request } from "express";
import * as passport from "passport";

import UserController from "../controllers/user.controller";

class UserRouter {
  public router!: Router;

  constructor() {
    this.router = Router();

    this.router.get("/login", UserController.getLogin);
    this.router.post(
      "/login",
      passport.authenticate("local", {
        successRedirect: "/",
        failureRedirect: "/login",
        failureFlash: false
      })
    );
    this.router.get("/logout", UserController.logout);
  }
}

export default new UserRouter().router;
