import { Model, DataTypes, Optional } from 'sequelize';
import { sequelize } from './sequelize';
import { dbType } from './index';

export type UserAttributes = {
  userNo: number;
  username: string;
  email: string;
  name: string;
  password: string;
};

export type UserCreationAttributes = Optional<
  UserAttributes,
  'userNo' | 'name'
>;

class User extends Model<UserAttributes, UserCreationAttributes> {
  declare readonly userNo: number;

  declare username: string;

  declare email: string;

  declare name: string;

  declare password: string;

  declare readonly createdAt: Date;

  declare readonly updatedAt: Date;
}

User.init(
  {
    userNo: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    charset: 'utf8mb4',
    collate: 'utf8mb4_unicode_ci',
  },
);

export const associate = (db: dbType) => {};

export default User;
