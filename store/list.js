import axios from '~/plugins/axios'

export const state = () => ({
  cur_page: null,
  list: [],
  total_page: null
})

export const mutations = {
  SET_LIST: (state, action) => {
    state.list = state.list.concat(state.list)
    state.cur_page = action.data.cur_page
    state.total_page = action.data.total_page
  },
  UPDATE_ITEMS: (state, action) => {
    state.list.forEach(function (item) {
      if (item.user_id === action) {
        item.paired = 1
      }
    })
  }
}

export const actions = {
  async REQ_LIST ({ state, commit }, page) {
    if (state.cur_page > state.total_page) return false

    const res = await axios.post('belikedlist', {
      openid: this.getters['GET_OPENID'],
      page: page,
      page_size: 20
    })
    if (res.data.code === 0) {
      commit('SET_LIST', res.data)
    }
  },
  async REQ_LIKE ({ commit }, id) {
    await axios.post('like', {
      openid: this.getters['GET_OPENID'],
      id: id
    }).then(res => {
      commit('UPDATE_ITEMS', id)
    })
  }
}
