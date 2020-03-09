import { Request, Response } from "express";

class IndexController {
  public index = (req: Request, res: Response) => {
    res.render("index", {
      pageName: "Index"
    });
  };

  public echo = (req: Request, res: Response) => {
    res.send(req.body.message);
  };
}

export default new IndexController();
