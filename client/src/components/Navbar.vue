<template>
  <div id="navbar">
         <!--Navbar-->
    <nav class="navbar navbar-expand-lg navbar-light bg-info">
        <!-- <a class="navbar-brand text-white" href="#">Hacktiv Inventory</a> -->
        <router-link class="navbar-brand text-white" :to="{ name: 'Home'}">Hacktiv Inventory</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li v-if="!isLogin" class="nav-item">
                <!-- <a class="nav-link text-white" href="#" tabindex="-1" aria-disabled="true">Login</a> -->
                <router-link class="nav-link text-white" to='/login'>Login</router-link>
              </li>
            <li v-else class="nav-item">
              <a @click.prevent="logout" class="nav-link text-white" href="#" tabindex="-1" aria-disabled="true">Logout</a>
              <!-- <router-link @click="logout" class="nav-link text-white" :to="{ path: '/login'}">Logout</router-link> -->
            </li>
          </ul>
        </div>
      </nav>
  </div>
</template>

<script>
export default {
  computed: {
    isLogin () {
      return this.$store.state.isLogin
    }
  },
  methods: {
    logout () {
      localStorage.removeItem('access_token')
      console.log('logout')
      this.$router.push('/login')
    }
  }
}
</script>

<style>

</style>
