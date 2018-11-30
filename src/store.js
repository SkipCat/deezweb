import Vue from 'vue'
import Vuex from 'vuex'

import fakeUser from './fakeUser'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { // data
    loggedUser: null
  },
  getters: {}, // computed properties
  actions: { // trigger mutations
    getUser (context) {
      fakeUser.getUser().then(user => {
        context.commit('changeUser', user)
      })
    }
  },
  mutations: { // state modification
    changeUser (state, user) {
      state.loggedUser = user
    }
  }
})
