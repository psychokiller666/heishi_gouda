import * as axios from 'axios'

var service = axios.create({
  baseURL: window.heishiConfig.baseUrl
})

service.interceptors.request.use(function (config) {
  if (config.headers.common.Authorization) {
    window.$nuxt.$store.commit('SET_USER', config.headers.common.Authorization)
  }
  return config
}, function (error) {
  return Promise.reject(error)
})

service.interceptors.response.use(function (config) {
  return config
}, function (error) {
  if (error.request.status === 401) {
    window.$nuxt.$router.push('/login')
  }
  // console.log(error)
  return Promise.reject(error)
})

export default service
