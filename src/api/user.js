import request from '@/utils/request'

// 登录
const login = () => {
  return request({
    url: '/admin/login',
    method: 'POST'
  })
}
// 获取用户信息
const getUserInfo = () => {
  return request({
    url: '/admin/getinfo',
    method: 'POST'
  })
}
// 退出

const logout = () => {
  return request({
    url: '/admin/logout',
    method: 'POST'
  })
}

// 导出
export default {
  login,
  getUserInfo,
  logout
}
