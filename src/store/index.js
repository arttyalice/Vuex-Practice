import Vue from 'vue'
import Vuex from 'vuex'
import users from './modules/users'
import global from './modules/global'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    users,
    global
  }
})