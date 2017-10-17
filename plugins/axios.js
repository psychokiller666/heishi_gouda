import * as axios from 'axios'

export default axios.create({
  baseURL: window.heishiConfig.baseUrl
})
