import { Request, Response, NextFunction } from 'express';
import { IVerifyOptions } from 'passport-local';
import User from '../models/user';

import passport = require('passport');


class UserController {
  public getLogin = (req: Request, res: Response) => {
    if (req.user) {
      return res.redirect('/');
    }
    res.render('account/login', {
      title: 'Login',
    });
  };

  public postLogin = (req: Request, res: Response, next: NextFunction) => {
    passport.authenticate('local', (err: Error, user: User, info: IVerifyOptions) => {
      if (err) { return next(err); }
      if (!user) { return res.redirect('/login'); }

      // eslint-disable-next-line no-shadow
      req.logIn(user, (err) => {
        if (err) { return next(err); }
        res.redirect('/');
      });
    })(req, res, next);
  }

  public getRegister = (req: Request, res: Response) => {
    res.render('account/register', {
      title: 'Register',
    });
  }

  public postRegister = async (req: Request, res: Response) => {
    const result: User = await User.create({
      userName: req.body.username,
      email: req.body.email,
      password: req.body.password,
      firstName: req.body.firstname,
      lastName: req.body.lastname,
    });

    res.json(result);
  }

  public logout = (req: Request, res: Response) => {
    req.logout();
    res.redirect('/');
  };
}

export default new UserController();
