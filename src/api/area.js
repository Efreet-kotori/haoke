import request from '@/utils/request'

export const getCityInfo = (name) => {
  return request({
    url: '/area/info',
    method: 'GET',
    params: {
      name
    }
  })
}

export const getHotCity = () => {
  return request({
    url: '/area/hot',
    method: 'GET'
  })
}
