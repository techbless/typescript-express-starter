import { Request, Response, NextFunction } from 'express';
import AsyncHandled from 'express-safe-async';
import * as passport from 'passport';
import UserService from '../services/user';
import CustomError from '../custom_error';

import { UserCreationAttributes } from '../models/user';
import Controller from './controller';

class UserController extends Controller {
  @AsyncHandled
  async postLogin(req: Request, res: Response, next: NextFunction) {
    const loginInfo: { username: string; password: string } = req.body;

    this.assertType(loginInfo, {
      username: 'String',
      password: 'String',
    });

    const authenticate = new Promise((resolve, reject) => {
      passport.authenticate('local', (authError, user, info) => {
        if (authError) {
          reject(authError);
        }

        if (!user) {
          reject(new CustomError(401, 'Login Failed', info.message));
        }

        req.logIn(user, loginError => {
          if (loginError) {
            reject(loginError);
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

  @AsyncHandled
  public async postRegister(req: Request, res: Response) {
    const userInfo: UserCreationAttributes = req.body;

    this.assertType(userInfo, {
      username: 'String',
      email: 'String',
      name: 'String | Undefined',
      password: 'String',
    });

    const user = await UserService.createUser(userInfo);
    res.json(user);
  }

  public logout(req: Request, res: Response) {
    req.logout(err => {
      console.log(err);
    });
    res.redirect('/');
  }
}

export default new UserController();
