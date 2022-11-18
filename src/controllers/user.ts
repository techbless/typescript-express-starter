import { Request, Response, NextFunction } from "express";
import { IVerifyOptions } from "passport-local";
import UserService from "../services/user";
import CustomError from "../custom_error";
import * as passport from "passport";

import { UserCreationAttributes } from "../models/user";

class UserController {
  async postLogin(req: Request, res: Response, next: NextFunction) {
    const authenticate = new Promise((resolve, reject) => {
      passport.authenticate("local", (err, user, info) => {
        if (err) {
          reject(err);
        }

        if (!user) {
          reject(new CustomError(401, "Login Failed", info.message));
        }

        req.logIn(user, (err) => {
          if (err) {
            reject(err);
          } else {
            resolve(user);
          }
        });
      })(req, res, next);
    });

    try {
      const result = await authenticate;

      const HOUR_IN_SECOND = 3600000;
      req.session.cookie.maxAge = 31 * 24 * HOUR_IN_SECOND; // Remember-Me 31 days
      res.json(result);
    } catch (err) {
      next(err);
    }
  }

  public async postRegister(req: Request, res: Response) {
    const userInfo: UserCreationAttributes = req.body;

    const user = await UserService.createUser(userInfo);
    res.json(user);
  }

  public logout(req: Request, res: Response) {
    req.logout((err) => {
      console.log(err);
    });
    res.redirect("/");
  }
}

export default new UserController();
