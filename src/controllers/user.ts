import { Request, Response, NextFunction } from "express";
import { IVerifyOptions } from "passport-local";
import User from "../models/user";
import CustomError from "../custom_error";
import * as passport from "passport";

class UserController {
  public getLogin(req: Request, res: Response) {
    if (req.user) {
      return res.redirect("/");
    }
    res.render("account/login", {
      title: "Login",
    });
  }

  async postLogin(req: Request, res: Response, next: NextFunction) {
    const authenticate = new Promise((resolve, reject) => {
      passport.authenticate("local", (err, user, _info) => {
        if (err) {
          reject(err);
        }
        if (!user) {
          reject(new CustomError(401, "Login Failed", "Check your credential"));
        }

        req.logIn(user, (err) => {
          if (err) {
            reject(err);
          }

          resolve(user);
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
    const result: User = await User.create({
      userName: req.body.username,
      email: req.body.email,
      password: req.body.password,
      firstName: req.body.firstname,
      lastName: req.body.lastname,
    });

    res.json(result);
  }

  public logout(req: Request, res: Response) {
    req.logout((err) => {
      console.log(err);
    });
    res.redirect("/");
  }
}

export default new UserController();
