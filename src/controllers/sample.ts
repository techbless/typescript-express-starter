import { Request, Response } from 'express';
import AsyncHandled from 'express-safe-async';
import Controller from './controller';

/**
 * This is a Controller templates, Duplicate this file to use.
 */
class SampleController extends Controller {
  @AsyncHandled // Use [@AsyncHandled] if the method is async
  public async sample(req: Request, res: Response) {
    this.assertType(req.body, {
      username: 'String',
      password: 'String',
      info: `{
        name: String,
        age: Number | Undefined
        ...
      }`,
    });

    // Write codes here
  }
}

export default new SampleController();
