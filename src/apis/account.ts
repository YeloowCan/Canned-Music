import request from '../utils/request'

const accountInfo = () => {
  return request({
    url: 'user/playlist?uid=77456545&limit=100'
  })
}

export { accountInfo }
