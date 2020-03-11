import { Request, Response } from "express";

/**
 * This is a Controller templates, Duplicate this file to use.
 */
class SampleController {
  public echo = (req: Request, res: Response) => {
    res.send(req.query.message);
  };
}

export default new SampleController();
