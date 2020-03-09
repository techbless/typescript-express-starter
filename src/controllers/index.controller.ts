import { Request, Response } from "express";
import { User } from "../models/entities/user.entity";

class IndexController {
  public index = (req: Request, res: Response) => {
    const userName: string = req.user ? (req.user as User).UserName : "Guest";
    res.render("index", {
      title: "Index",
      userName: userName
    });
  };

  public echo = (req: Request, res: Response) => {
    res.send(req.params.message);
  };
}

export default new IndexController();
