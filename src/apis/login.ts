import request from '../utils/request'

const login = (phone: string) => {
  return request({
    url: `/comment/music?id=186016&limit=1`
    // params: {
    //   phone,
    //   password
    // }
  })
}

export { login }
