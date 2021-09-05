<template>
  <div id="navbar">
        <nav class="navbar navbar-expand-lg navbar-light bg-info">
        <a @click.prevent="banner_btn" class="navbar-brand text-white" href="#">Hacktiv Inventory</a>
        <!-- <router-link class="navbar-brand text-white" to="/">Hacktiv Inventory</router-link> -->
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <!-- <li class="nav-item">
                <a class="nav-link text-white" href="#" tabindex="-1" aria-disabled="true">Login</a>
              </li> -->
            <li v-if="!isLogin" class="nav-item">
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
      localStorage.clear()
      this.$router.push('/login').catch(() => console.log('logout'))
    },
    banner_btn () {
      if (localStorage.getItem('access_token')) {
        this.$router.push({ name: 'Home' })
          .catch(() => {
            console.log('bannder')
          })
      } else {
        Swal.fire({
          icon: 'error',
          title: 'You Must Login First'
        })
      }
    }
  }
}
</script>

<style>

</style>
