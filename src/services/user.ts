import User, { UserCreationAttributes } from '../models/user';
import * as bcrypt from "bcrypt";
class UserService {
  async createUser(userInfo: UserCreationAttributes) {
    const SALT_ROUNDS = 10;
    const hashedPassword = await bcrypt.hash(userInfo.password, SALT_ROUNDS);
    userInfo.password = hashedPassword;

    return User.create(userInfo);
  }

  async getUserByUserNo(userNo: number) {
    return User.findByPk(userNo);
  }

  async getUserByUsername(username: string) {
    return User.findOne({
      where: {
        username,
      },
    });
  }
}

export default new UserService();
