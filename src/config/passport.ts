import * as passport from "passport";
import * as passportLocal from "passport-local";
import CustomError from "../custom_error";
import { Request, Response, NextFunction } from "express";
import User from "../models/user";

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
      return done(null, false, { message: "Incorrect Username" });
    }

    if (user.password !== password) {
      return done(null, false, { message: "Incorrect Password" });
    }

    return done(null, user);
  })
);

export const isAuthenticated = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.isAuthenticated()) return next();
  else throw new CustomError(401, "Unauthorized", "Please login first");
};
