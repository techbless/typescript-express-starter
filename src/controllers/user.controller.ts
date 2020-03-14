import { Request, Response } from 'express';
import userModel from '../models/user.model';
import { User } from '../models/entities/user.entity';


class UserController {
  public getLogin = (req: Request, res: Response) => {
    if (req.user) {
      return res.redirect('/');
    }
    res.render('account/login', {
      title: 'Login',
    });
  };

  public getRegister = (req: Request, res: Response) => {
    res.render('account/register', {
      title: 'Register',
    });
  }

  public postRegister = async (req: Request, res: Response) => {
    const result: User = await userModel.createUser({
      UserName: req.body.username,
      Email: req.body.email,
      Password: req.body.password,
      FristName: req.body.firstname,
      LastName: req.body.lastname,
    });

    res.json(result);
  }

  public logout = (req: Request, res: Response) => {
    req.logout();
    res.redirect('/');
  };
}

export default new UserController();
