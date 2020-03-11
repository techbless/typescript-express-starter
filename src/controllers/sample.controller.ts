import { Request, Response } from "express";

class SampleController {
  public echo = (req: Request, res: Response) => {
    res.send(req.query.message);
  }
}

export default new SampleController();
