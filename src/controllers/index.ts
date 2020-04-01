import { Request, Response } from 'express';

class IndexController {
  public index = (req: Request, res: Response) => {
    const userName: string = req.user ? req.user.userName : 'Guest';
    res.render('index', {
      title: 'Index',
      userName,
    });
  };
}

export default new IndexController();
