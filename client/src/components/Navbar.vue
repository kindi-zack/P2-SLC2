<template>
  <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-info">
        <a @click.prevent="goToHome" class="navbar-brand text-white" href="#">Hacktiv Inventory</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li v-if="!isLogin" class="nav-item">
                <!-- <a class="nav-link text-white" href="#" tabindex="-1" aria-disabled="true">Login</a> -->
                <router-link to='/login' class="nav-link text-white">Login</router-link>
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
    logout () {
      localStorage.removeItem('access_token')
      this.$router.push('/login')
    },
    goToHome () {
      if (localStorage.getItem('access_token')) {
        this.$router.push('/')
          .catch(() => {
            console.log('go to home')
          })
      } else {
        Swal.fire({
          icon: 'error',
          title: 'YOU MUST LOGIN FIRST'
        })
        this.$router.push('/login')
          .catch(() => {
            console.log('go to login')
          })
        console.log('login dulu gan')
      }
    }
  },
  created () {
  }
}
</script>

<style>

</style>
