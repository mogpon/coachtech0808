import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sum: 0,
    lastTeam: '',
  },
  mutations: {
    countUP(state) {
      state.sum++
    }
  },
  actions: {
  },
  modules: {
  }
})
