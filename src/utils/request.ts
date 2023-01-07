import { message } from 'antd'
import axios, { AxiosResponse, AxiosRequestConfig } from 'axios'

export const baseUrl = 'https://cannedapi.yellowcan.top/'

axios.defaults.baseURL = baseUrl
axios.defaults.headers.post['Content-Type'] = 'application/json'

const handleError = (error: any) => {
  message.error(error.data.message)
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

const request = ({ url, data, method = 'get', ...rest }: AxiosRequestConfig) => {
  return axios({
    url,
    data,
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
    .then(function (response: any) {
      if (response?.code !== 200) {
        message.error(response.message)
        return
      }
      return response
    })
    .catch(function (error: any) {
      // handle error
      handleError(error.response)
    })
    .finally(function () {
      // always executed
    })
}

export default request
