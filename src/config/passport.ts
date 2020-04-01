import * as passport from 'passport';
import * as passportLocal from 'passport-local';
import { Request, Response, NextFunction } from 'express';
import User from '../models/user';

passport.serializeUser(async (user: User, done) => {
  done(null, user.userId);
});

passport.deserializeUser(async (id: number, done) => {
  const user = await User.findOne({
    where: {
      userId: id,
    },
  });

  done(null, user);
});


const LocalStrategy = passportLocal.Strategy;

passport.use(
  new LocalStrategy(async (username, password, done) => {
    const user = await User.findOne({
      where: {
        userName: username,
      },
    });

    if (!user) {
      return done(null, false, { message: 'Incorrect username' });
    }

    if (user.password !== password) {
      return done(null, false, { message: 'Incorrect password' });
    }

    return done(null, user);
  }),
);


export const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
  if (req.isAuthenticated()) return next();
  res.redirect('/login');
};
