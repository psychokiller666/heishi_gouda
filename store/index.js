import axios from '~/plugins/axios'
import { Toast } from 'mint-ui'

export const state = () => ({
  switch: false,
  authenticated: null
})

export const mutations = {
  SET_USER: function (state, action) {
    state.authenticated = action
    axios.defaults.headers.common['Authorization'] = action
  }
}

export const getters = {
  GET_AUTH: (state) => {
    return state.authenticated
  }
}

export const actions = {
  async REQ_WECHAT_LOGIN ({ commit }, code) {
    const res = await axios.post('newlogin', {
      code: code
    })
    if (res.data.code === 0) {
      commit('SET_USER', res.data.data)
      return true
    } else {
      Toast({
        message: res.data.error_msg,
        className: 'win95-toast'
      })
      return false
    }
  },
  async REQ_IS_VAILABLE ({ commit }) {
    const res = await axios.get('isavailable')
    if (res.data.code === 0) {
      return res.data
    } else {
      return false
    }
  }
}
