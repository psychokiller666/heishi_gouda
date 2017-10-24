import axios from '~/plugins/axios'

export const state = () => ({
  loading: true,
  cur_page: null,
  list: [],
  total_page: null,
  next_page: 1,
  ismore: true
})

export const mutations = {
  SET_LIST: (state, action) => {
    state.list = state.list.concat(action.data.list)
    state.cur_page = action.data.cur_page
    state.total_page = action.data.total_page
    state.next_page = state.next_page + 1
  },
  UPDATE_ITEMS: (state, action) => {
    state.list.forEach(function (item) {
      if (item.user_id === action) {
        item.paired = 1
      }
    })
  },
  SET_LOADING: (state, action) => {
    state.loading = action
  },
  SET_ISMORE: (state, action) => {
    state.ismore = action
  }
}

export const actions = {
  async REQ_LIST ({ state, commit }, page) {
    if (state.ismore) {
      commit('SET_LOADING', true)
      const res = await axios.post('belikedlist', {
        openid: this.getters['GET_OPENID'],
        cur_page: state.next_page,
        page_size: 20
      })
      if (res.data.code === 0) {
        commit('SET_LIST', res.data)
        commit('SET_LOADING', false)
      } else if (res.data.code === 3) {
        commit('SET_ISMORE', false)
        commit('SET_LOADING', false)
      }
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
