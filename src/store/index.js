import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    input1: '',
    input2: ''
  },
  mutations: {
    setInput1: function(state, value) {
      state.input1 = value
    },
    setInput2: function(state, value) {
      state.input2 = value
    }
  },
  actions: {   
    setInput1: function(context, value) {
      context.commit('setInput1', value)
    },
    setInput2: function(context, value) {
      context.commit('setInput2', value)
    }	
  },
  modules: {
  },
  
  plugins: [createPersistedState( {
    storage: window.sessionStorage  
  }
  )]  
})