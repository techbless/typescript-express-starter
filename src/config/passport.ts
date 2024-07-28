import * as passport from 'passport';
import * as passportLocal from 'passport-local';
import { Request, Response, NextFunction } from 'express';
import * as bcrypt from 'bcrypt';

import User from '../models/user';
import UserService from '../services/user';
import CustomError from '../custom_error';
import UnauthorizedExceptioni from "../exceptions/NotAuthenticatedException";
import NotAuthenticatedException from "../exceptions/NotAuthenticatedException";

function setSerializer() {
  passport.serializeUser(async (user: User, done) => {
    done(null, user.userNo);
  });

  passport.deserializeUser(async (userNo: number, done) => {
    const user = await UserService.getUserByUserNo(userNo);
    done(null, user);
  });
}

function setLocalStrategy() {
  const LocalStrategy = passportLocal.Strategy;

  passport.use(
    new LocalStrategy(async (username, password, done) => {
      const user = await UserService.getUserByUsername(username);

      if (!user) {
        return done(null, false, { message: 'Incorrect Username' });
      }

      if (!await bcrypt.compare(password, user.password)) {
        return done(null, false, { message: 'Incorrect Password' });
      }

      return done(null, user);
    }),
  );
}

export function setStrategies() {
  setSerializer();
  setLocalStrategy();
}

export const isAuthenticated = (req: Request, _res: Response, next: NextFunction) => {
  if (req.isAuthenticated()) return next();
  throw new NotAuthenticatedException();
};
