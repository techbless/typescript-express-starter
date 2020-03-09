import { Request, Response } from "express";

class UserController {
  public getLogin = (req: Request, res: Response) => {
    if (req.user) {
      return res.redirect("/");
    }
    res.render("account/login", {
      title: "Login"
    });
  };

  public logout = (req: Request, res: Response) => {
    req.logout();
    res.redirect("/");
  };
}

export default new UserController();
