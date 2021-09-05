import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios.js'
import router from '../router/index'
import Swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    inventories: []
  },
  mutations: {
    SET_ISLOGIN (state, value) {
      state.isLogin = value
    },
    SET_INVENTORIES (state, value) {
      state.inventories = value
    }
  },
  actions: {
    login (context, payload) {
      const { email, password } = payload
      axios({
        url: 'login',
        method: 'POST',
        data: {
          email, password
        }
      })
        .then(({ data }) => {
          console.log(data)
          localStorage.access_token = data.access_token
          router.push('/')
          context.commit('SET_ISLOGIN', false)
        })
        .catch(({ response }) => {
          console.log(response.data)
          Swal.fire({
            icon: 'error',
            title: response.data.msg
          })
        })
    },

    fetchInventories (context) {
      axios({
        url: 'inventories',
        method: 'GET'
      })
        .then(({ data }) => {
          console.log(data)
          context.commit('SET_INVENTORIES', data)
        })
        .catch(err => {
          console.log(err.response)
        })
    }
  },
  modules: {
  }
})
