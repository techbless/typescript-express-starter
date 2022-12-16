import User, { UserCreationAttributes } from '../models/user';

class UserService {
  async createUser(userInfo: UserCreationAttributes) {
    console.log(userInfo);
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
