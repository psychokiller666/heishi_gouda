import * as axios from 'axios'
import { Toast } from 'mint-ui'

var service = axios.create({
  baseURL: window.heishiConfig.baseUrl
})

service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    return response
  },
  error => {
    switch (error.response.status) {
      case 401:
        window.$nuxt.$router.push('/login')
        break
      default:
        window.$nuxt.$router.push('/login')
        Toast({
          message: 'error:' + error.response.data.message,
          className: 'win95-toast'
        })
        break
    }
    return Promise.reject(error)
  }
)

export default service
