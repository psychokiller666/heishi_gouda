import axios from '~/plugins/axios'

export const state = () => ({
  items: [],
  buttonLoad: true
})

export const mutations = {
  SET_ITEMS: (state, action) => {
    state.items = action.data
  },
  UPDATE_ITEMS: (state, action) => {
    state.items.forEach(function (item, key) {
      if (item === action) {
        state.items = state.items.slice(0, key).concat(state.items.slice(key + 1))
      }
    })
  },
  SET_BUTTONLOAD: (state, action) => {
    state.buttonLoad = action
  }
}

export const getters = {
  GET_FIRST_ITEMS: (state) => {
    let item = null
    state.items.forEach((items, key) => {
      item = items
    })
    return item
  }
}

export const actions = {
  async REQ_LIST ({ state, commit }) {
    if (state.items.length) return false
    commit('SET_BUTTONLOAD', true)
    await axios.post('list', {
      openid: this.getters['GET_OPENID']
    }).then(res => {
      commit('SET_BUTTONLOAD', false)
      commit('SET_ITEMS', res.data)
    })
  },
  async REQ_LIKE ({ commit }) {
    commit('SET_BUTTONLOAD', true)
    let item = this.getters['home/GET_FIRST_ITEMS']
    await axios.post('like', {
      openid: this.getters['GET_OPENID'],
      id: item.id
    }).then(res => {
      commit('UPDATE_ITEMS', item)
      commit('SET_BUTTONLOAD', false)
    })
  },
  async REQ_SHIT ({ commit }) {
    commit('SET_BUTTONLOAD', true)
    let item = this.getters['home/GET_FIRST_ITEMS']
    await axios.post('shit', {
      openid: this.getters['GET_OPENID'],
      id: item.id
    }).then(res => {
      commit('UPDATE_ITEMS', item)
      commit('SET_BUTTONLOAD', false)
    })
  },
  async REQ_USERINFO () {
    const res = await axios.post('showinfo', {
      openid: this.getters['GET_OPENID']
    })
    if (res.data.code === 0) {
      return res.data
    } else {
      return false
    }
  }
}
