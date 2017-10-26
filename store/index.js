import axios from '~/plugins/axios'
import { Toast } from 'mint-ui'

export const state = () => ({
  authUser: null
})

export const mutations = {
  SET_USER: function (state, action) {
    state.authUser = action.data
  }
}

export const getters = {
  GET_OPENID: (state) => {
    return state.authUser
  }
}

export const actions = {
  // 全局服务初始化
  nuxtServerInit: ({ commit }, ctx) => {

  },
  async REQ_WECHAT_LOGIN ({ commit }, code) {
    const res = await axios.post('login', {
      code: code
    })
    if (res.data.code === 0) {
      commit('SET_USER', res.data)
      return true
    } else {
      Toast({
        message: res.data.error_msg,
        className: 'win95-toast'
      })
      return false
    }
  }
}
