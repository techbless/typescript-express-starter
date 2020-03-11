import * as UserEntity from '../models/entities/user.entity';

declare global {
  namespace Express {
    export interface User extends UserEntity.User { }
  }
}
