<template>
  <div id="navbar">
      <nav class="navbar navbar-expand-lg navbar-light bg-info">
        <!-- <a class="navbar-brand text-white" href="#">Hacktiv Inventory</a> -->
        <a @click.prevent="home" id="navbar-brand" class="navbar-brand text-white" href="#">Hacktiv Inventory</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li v-if="!isLogin" class="nav-item">
                <a @click.prevent="login" class="nav-link text-white" href="#" tabindex="-1" aria-disabled="true">Login</a>
              </li>
            <li v-else class="nav-item">
              <a @click.prevent="logout" class="nav-link text-white" href="#" tabindex="-1" aria-disabled="true">Logout</a>
            </li>
          </ul>
        </div>
      </nav>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
export default {
  computed: {
    isLogin () {
      return this.$store.state.isLogin
    }
  },
  methods: {
    home () {
      if (!localStorage.access_token) {
        Swal.fire({
          icon: 'error',
          title: 'You Must Login First !!'
        })
      }
    },
    login () {
      this.$router.push('/login')
        .catch(() => {
          console.log('login clicked')
        })
    },
    logout () {
      localStorage.removeItem('access_token')
      this.$store.commit('SET_ISLOGIN', false)
      this.$router.push({ name: 'Login' })
        .then(() => {
          console.log('logout is clicked')
          Swal.fire({
            icon: 'success',
            title: 'Logout Success'
          })
        })
    }
  }
}
</script>

<style>
#navbar-brand {
  padding-left: 10px;
}
</style>
