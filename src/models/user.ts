import { Model, DataTypes } from 'sequelize';
import { sequelize } from './sequelize';
import { dbType } from './index';

class User extends Model {
    public readonly userId!: number;

    public userName!: string;

    public email!: string;

    public password!: string;

    public firstName!: string;

    public lastName!: string;

    public readonly createdAt!: Date;

    public readonly updatedAt!: Date;
}

User.init({
  userId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  userName: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  firstName: {
    type: DataTypes.STRING(50),
  },
  lastName: {
    type: DataTypes.STRING(50),
  },
}, {
  sequelize,
  modelName: 'User',
  tableName: 'users',
  charset: 'utf8mb4',
  collate: 'utf8mb4_unicode_ci',
});

export const associate = (db: dbType) => {

};

export default User;
