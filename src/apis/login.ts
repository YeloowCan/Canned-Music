import request from '../utils/request'
import { ILoginRequest } from './types/login'

const login = ({ phone, password, captcha }: ILoginRequest) => {
  return request({
    url: `/login/cellphone?phone=${phone}&${password ? `password=${password}` : `captcha=${captcha}`}`
  })
}

const getAuthCode = (phone: string) => {
  return request({
    url: `/captcha/sent?phone=${phone}`
  })
}

export { login, getAuthCode }
