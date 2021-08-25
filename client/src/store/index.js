import axios from '../../api/axios'
import Vue from 'vue'
import router from '../router/index'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    inventories: [],
    loginFail: ''
  },
  mutations: {
    SET_ISLOGIN (state, value) {
      this.state.isLogin = value
    },
    SET_INVENTORIES (state, value) {
      this.state.inventories = value
    },
    SET_LOGINFAIL (state, value) {
      this.state.loginFail = value
    }
  },
  actions: {
    fetchInventories (context, payload) {
      axios({
        method: 'GET',
        url: '/inventories'
      })
        .then(({ data }) => {
          console.log(data)
          context.commit('SET_INVENTORIES', data)
        })
        .catch(err => {
          console.log(err.response.data)
        })
    },
    login (context, payload) {
      const { email, password } = payload
      axios({
        method: 'POST',
        url: 'login',
        data: {
          email,
          password
        }
      })
        .then(({ data }) => {
          console.log(data)
          localStorage.access_token = data.access_token
          // console.log()
          context.commit('SET_ISLOGIN', true)
          router.push('/')
        })
        .catch(err => {
          console.log(err.response.data)
          console.log('errrrrr')
          console.log(payload)
          context.commit('SET_LOGINFAIL', err.response.data.msg)
        })
    }
  },
  modules: {
  }
})
