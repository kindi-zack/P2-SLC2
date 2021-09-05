<template>
  <div id="login">
        <div class="card col-4 mx-auto my-2">
        <img src="../../source/assets/login.jpg" class="card-img-top img-thumbnail " alt="...">
        <div class="card-body d-flex flex-row">
          <form @submit.prevent="login" class="col-12">
            <div class="form-group">
              <label for="email">Email</label>
              <input id="email" v-model="email" type="email" class="form-control" required />
            </div>
            <div class="form-group">
              <label for="caption">Password</label>
              <input v-model="password" type="password" class="form-control" id="password" required />
            </div>
            <div class="text-center">
              <button type="submit" class="btn btn-info">Submit</button>
            </div>
          </form>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      const email = this.email
      const password = this.password

      this.$store.dispatch('login', { email, password }).catch(() => console.log('login...'))
      // this.$router.push('/')

      this.email = ''
      this.password = ''
    }
  },
  beforeRouteEnter (to, from, next) {
    if (!localStorage.getItem('access_token')) {
      next()
    } else {
      next('/')
    }
  },
  created () {
    this.$store.commit('SET_ISLOGIN', true)
  }
}
</script>

<style>

</style>
