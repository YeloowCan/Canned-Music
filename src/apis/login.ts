import request from '../utils/request'
import { ILoginRequest } from './types/login'

const login = ({ phone, password }: ILoginRequest) => {
  return request({
    url: `/login/cellphone?phone=${phone}&captcha=${password}`
  })
}

const getAuthCode = (phone: string) => {
  return request({
    url: `/captcha/sent?phone=${phone}`
  })
}

export { login, getAuthCode }
