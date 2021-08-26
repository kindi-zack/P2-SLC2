import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'
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
      this.state.isLogin = value
    },
    SET_INVENTORIES (state, value) {
      this.state.inventories = value
    }
  },
  actions: {
    actFetchInventories (context, payload) {
      axios({
        url: 'inventories',
        method: 'GET'
      })
        .then(({ data }) => {
          console.log(data)
          context.commit('SET_INVENTORIES', data)
        })
        .catch(({ response }) => {
          console.log(response.msg)
        })
    },
    actLogin (context, payload) {
      const { email, password } = payload
      axios({
        method: 'POST',
        url: 'login',
        data: {
          email, password
        }
      })
        .then(({ data }) => {
          console.log(data)
          localStorage.access_token = data.access_token
          Swal.fire({
            icon: 'success',
            title: `Welcome ${data.email}`
          })
          router.push('/')
          context.commit('SET_ISLOGIN', true)
        })
        .catch(err => {
          console.log(err.response.data)
          Swal.fire({
            icon: 'error',
            title: err.response.data.msg
          })
        })
    }
  },
  modules: {
  }
})
