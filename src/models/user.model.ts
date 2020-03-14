import { User } from './entities/user.entity';

interface UserForm{
  UserName: string;
  Email: string;
  Password: string;
  FristName?: string;
  LastName?: string;
}

class UserModel {
  public createUser = async (userForm: UserForm) => {
    let user: User = new User();

    user.Email = userForm.Email;
    user.UserName = userForm.UserName;
    user.Password = userForm.Password;

    // Optional Columns
    if (userForm.FristName) user.FirstName = userForm.FristName!;
    if (userForm.LastName) user.LastName = userForm.LastName!;

    user = await user.save();
    return user;
  };
}

export default new UserModel();
