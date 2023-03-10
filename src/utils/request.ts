import { message } from 'antd'
import axios, { AxiosResponse, AxiosRequestConfig } from 'axios'

export const baseUrl = 'https://cannedapi.yellowcan.top/'

export interface IRequestError {
  code: number
  message: string
}

const successCode = [200, 800, 801, 802, 803]

axios.defaults.baseURL = baseUrl
axios.defaults.headers.post['Content-Type'] = 'application/json'

const handleError = (error: IRequestError) => {
  message.error(error.message)
}

// axios的实例及拦截器配置
const axiosInstance = axios.create({
  baseURL: baseUrl
})

axiosInstance.interceptors.response.use(
  (res) => res.data,
  (err) => {
    console.log(err, '网络错误')
  }
)

export { axiosInstance }

const request = ({ url, data, method = 'post', ...rest }: AxiosRequestConfig) => {
  return axios({
    url,
    data: {
      ...data,
      cookie: localStorage.getItem('cookie')
    },
    method,
    ...rest
  })
    .then(function (response: AxiosResponse) {
      // handle success
      return response
    })
    .then(function (response: AxiosResponse) {
      if (response.status === 200) {
        return response.data
      }
    })
    .then(function (response) {
      if (!successCode.includes(response?.code)) {
        message.error(response.message)
        return
      }
      return response
    })
    .catch(function (error) {
      // handle error
      handleError(error.response)
    })
    .finally(function () {
      // always executed
    })
}

export default request
