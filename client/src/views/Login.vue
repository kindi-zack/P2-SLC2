<template>
  <div id="login">
      <div class="card col-4 mx-auto my-2">
        <img src="../assets/login.jpg" class="card-img-top img-thumbnail " alt="...">
        <div class="card-body d-flex flex-row">
          <form class="col-12" @submit.prevent="actLogin">
            <div class="form-group">
              <label for="email">Email</label>
              <input v-model="email" id="email" type="email" class="form-control"  required />
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input v-model="password"  type="password" class="form-control" id="password" required />
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
    actLogin () {
      this.$store.dispatch('actLogin', {
        email: this.email,
        password: this.password
      })
        .then(() => {
          this.email = ''
          this.password = ''
        })
    }
  }
}
</script>

<style>

</style>
