import request, { axiosInstance } from '../utils/request'
import { ILoginRequest, IQRCodeState } from './types/login'

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

/**
 * @description 二维码key生成接口
 */
const getQrKey = async () => {
  const response = await request({
    url: `/login/qr/key?timestamp=${new Date().getTime()}`
  })

  return response.data.unikey
}

/**
 * @description 生成二维码
 * @param key
 * @returns
 */
const createQrCode = async (key: string) => {
  const response = await request({
    url: `/login/qr/create?key=${key}&qrimg=true&timestamp=${new Date().getTime()}`
  })

  return response.data.qrimg
}
/**
 * @description 检测二维码状态
 * @param key
 * @returns
 */
const checkQrCode = async (key: string): Promise<IQRCodeState> => {
  const response = await request({
    url: `/login/qr/check?key=${key}&timestamp=${new Date().getTime()}`
  })

  return response
}

export { login, getAuthCode, getQrKey, createQrCode, checkQrCode }
