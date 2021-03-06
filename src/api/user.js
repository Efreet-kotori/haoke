import request from '@/utils/request'
/**
 *登录
 * @param {*} username 账号
 * @param {*} password 密码
 * @returns Promise
 */
export const login = (username, password) => {
  return request({
    url: '/user/login',
    method: 'POST',
    data: { username, password }
  })
}

export const userDataGet = () => {
  return request({
    url: '/user',
    method: 'GET'
  })
}

export const getFavorites = () => {
  return request({
    url: '/user/favorites',
    method: 'GET'
  })
}

export const published = () => {
  return request({
    url: '/user/houses'
  })
}
