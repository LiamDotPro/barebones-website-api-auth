import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  token: '',
  users: {
    userList: [],
    userMessage: ''
  }

}

const mutations = {
  SET_TOKEN(state, token) {
    state.token = token
  },
  EMPTY_TOKEN(state, token) {
    state.token = ''
  },
  ADD_USER(state, obj) {

  },
  REGISTER_USER(state, obj) {

  }
}

const actions = {
  // This method is for local storage or cookie loading.
  load_Token: ({commit}, token) => {
    commit('SET_TOKEN', token)
  },
  add_new_token: ({commit}, token) => {
    commit('SET_TOKEN', token)
  },
  empty_token: ({commit}) => {
    commit('EMPTY_TOKEN')
  },
  // User actions
  add_user: ({commit}, obj) => {
    commit('ADD_USER', obj)
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
