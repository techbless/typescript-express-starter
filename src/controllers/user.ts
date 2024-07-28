import { Request, Response, NextFunction } from 'express';
import AsyncHandled from 'express-safe-async';
import * as passport from 'passport';
import UserService from '../services/user';
import CustomError from '../custom_error';

import User, { UserCreationAttributes } from '../models/user';
import Controller from './controller';
import {Builder} from "builder-pattern";
import DuplicatedException from "../exceptions/DuplicatedUserException";
import DuplicatedUserException from "../exceptions/DuplicatedUserException";
import UserResponse from "../dto/userResponse";
import LoginFailException from "../exceptions/LoginFailException";
import SessionNotFoundException from "../exceptions/SessionNotFoundException";
import userResponse from "../dto/userResponse";


class UserController extends Controller {
  @AsyncHandled
  async postLogin(req: Request, res: Response, next: NextFunction) {
    const loginInfo: { username: string; password: string } = req.body;

    this.assertType(loginInfo, {
      username: 'String',
      password: 'String',
    });

    const authenticate = new Promise<User>((resolve, reject) => {
      passport.authenticate('local', (authError, user, info) => {
        if (authError) {
          reject(authError);
        }

        if (!user) {
          reject(new LoginFailException(info.message));
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
      const user: User = await authenticate;

      const HOUR_IN_SECOND = 3600000;
      req.session.cookie.maxAge = 31 * 24 * HOUR_IN_SECOND; // Remember-Me 31 days

      const userResponse= this.convertUserToUserRespones(user);
      res.json(userResponse);
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

    try {
      const user = await UserService.createUser(userInfo);
      const userResponse= this.convertUserToUserRespones(user);

      res.json(userResponse);
    } catch (ex) {
      throw new DuplicatedUserException();
    }
  }

  @AsyncHandled
  public async logout(req: Request, res: Response) {

    const logoutTask = new Promise<boolean>((resolve, reject) => {
      req.logout(err => {
        if(err) {
          throw err;
        }
      });

      resolve(true);
    });

    const result = await logoutTask;

    res.json(result);
  }

  @AsyncHandled
  public async getLoggedInUser(req: Request, res: Response) {
    const user = req.user;

    if(!user) {
      throw new SessionNotFoundException();
    }

    const userResponse= this.convertUserToUserRespones(user);
    res.json(userResponse);
  }

  private convertUserToUserRespones(user: User) : UserResponse {
    const userResponse= Builder<UserResponse>()
        .userNo(user.userNo)
        .username(user.username)
        .email(user.email)
        .name(user.name)
        .updatedAt(user.updatedAt)
        .createdAt(user.createdAt)
        .build();

    return userResponse;
  }
}

export default new UserController();
