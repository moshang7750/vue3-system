/**
 * @description 失败信息集合，包括 code 和 message
 * @author
 */

 export default {
  // 用户名已存在
  registerUserNameExistInfo: {
    code: 10001,
    message: '用户名已存在'
  },
  // 注册失败
  registerFailInfo: {
    code: 10002,
    message: '注册失败，请重试'
  },
  // 用户名不存在
  registerUserNameNotExistInfo: {
    code: 10003,
    message: '用户名未存在'
  },
  // 登录失败
  loginFailInfo: {
    code: 10004,
    message: '登录失败，用户名或密码错误'
  },
  // 未登录
  loginCheckFailInfo: {
    code: 10005,
    message: '您尚未登录'
  },
  // 修改密码失败
  changePasswordFailInfo: {
    code: 10006,
    message: '修改密码失败，请重试'
  },
  // 用户信息失败
  getUserInfoFailInfo: {
    code: 10007,
    message: '用户信息获取失败 token验证无效'
  },
  getUserListFailInfo: {
    code: 10008,
    message: '用户列表获取失败, 请重试'
  },
  editUserInfoFailInfo: {
    code: 10009,
    message: '用户信息修改失败, 请重试'
  },
  deleteUserInfoFailInfo: {
    code: 10010,
    message: '用户删除失败, 请重试'
  },
  updateUserRoleFailInfo: {
    code: 10011,
    message: '用户角色修改失败,请重试'
  }
}