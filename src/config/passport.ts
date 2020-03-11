import * as passport from 'passport';
import * as passportLocal from 'passport-local';
import { Request, Response, NextFunction } from 'express';
import { User } from '../models/entities/user.entity';

passport.serializeUser(async (user: User, done) => {
  done(null, user.UserId);
});

passport.deserializeUser(async (id: number, done) => {
  const user = await User.findByIds([id]);
  done(null, user[0]);
});


const LocalStrategy = passportLocal.Strategy;

passport.use(
  new LocalStrategy(async (username, password, done) => {
    const user = await User.findOne({ UserName: username });

    if (!user) {
      return done(null, false, { message: 'Incorrect username' });
    }

    if (user.Password !== password) {
      return done(null, false, { message: 'Incorrect password' });
    }

    return done(null, user);
  }),
);


export const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
  if (req.isAuthenticated()) return next();
  res.redirect('/login');
};
