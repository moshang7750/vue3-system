import {
  Model,
  DataTypes,
  Optional
} from 'sequelize'
import seq from '../seq'

// sequelize+typescript 参考文档
// https://sequelize.org/master/manual/typescript.html

export interface UserModelProps {
  id: number;
  username: string;
  password: string;
  email: string | null;
  mobile: string | null;
  avatar: string;
  isSuper: 0 | 1;
  status: 0 | 1;
}

export type RegisterModel = Omit<UserModelProps, 'id'|'isSuper'>

// 在“User.build”和“User.create”调用中，有些属性是可选的
interface UserCreationAttributes extends Optional<UserModelProps, "id" | "isSuper" | "status" | "avatar"> {}

interface UserInstance
  extends Model<UserModelProps, UserCreationAttributes>,
    UserModelProps {}

// 创建User模型  数据表的名字是users
const User = seq.define<UserInstance>('User', {
  id: { // id会自动创建 并设为主键、自增
    primaryKey: true,
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '用户名'
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    comment: '密码'
  },
  email: {
    type: DataTypes.STRING,
    comment: '用户邮箱'
  },
  mobile: {
    type: DataTypes.STRING,
    comment: '手机号'
  },
  avatar: {
    type: DataTypes.STRING,
    comment: '头像'
  },
  isSuper: {
    type: DataTypes.BOOLEAN, // TINYINT(1)
    comment: '超级管理员 1是 0不是',
    defaultValue: 0
  },
  status: {
    type: DataTypes.BOOLEAN, // TINYINT(1)
    comment: '账户禁用状态 1正常 0禁用',
    defaultValue: 1
  }
})

export default User