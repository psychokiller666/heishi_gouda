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
  response => response,
  error => {
    switch (error.response.status) {
      case 401:
        window.$nuxt.$store.commit('SET_USER', '')
        if (window.$nuxt.$route.name === 'login') {
          window.$nuxt.$router.go('/login')
        } else {
          window.$nuxt.$router.push('/login')
        }
        break
      case 404:
      case 500:
      case 502:
        Toast({
          message: 'error: 傻逼后端出错了。' + error.response.status,
          className: 'win95-toast'
        })
        break
    }
    return Promise.reject(error)
  }
)

export default service
