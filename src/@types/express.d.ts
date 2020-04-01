import UserModel from '../models/user.model';

declare global {
  namespace Express {
    export interface User extends UserModel { }
  }
}
