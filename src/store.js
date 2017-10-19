import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  token: ''
}

const mutations = {
  SET_TOKEN(state, token) {
    state.token = token
  }
}

const actions = {
  // This method is for local storage or cookie loading.
  load_Token: ({commit}, token) => {
    commit('SET_TOKEN', token)
  },
  add_new_token: ({commit}, token) => {
    commit('SET_TOKEN', token)
  }
}

const getters = {}

export default new Vuex.Store({
  strict: true,
  state,
  getters,
  actions,
  mutations
})
