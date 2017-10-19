<template>
  <div class="login">
    <h1>Login</h1>
    <form @submit.prevent="attemptLogin">
      <input v-model="username" type="email" required>
      <input v-model="password" type="password">
      <button type="submit">Login</button>
    </form>
    <h2>{{error}}</h2>
    <h2>{{getTokenFromState}}</h2>
    <router-link to="/">
      <button>home</button>
    </router-link>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'login',
    data() {
      return {
        username: '',
        password: '',
        error: '',
        token: ''
      }
    },
    methods: {
      attemptLogin: function () {
        axios.post('http://localhost:2000/login', {email: this.username, password: this.password}).then((res) => {
          if (res.data.message === 'bad') {
            this.error = res.data.error
          } else if (res.data.message === 'ok') {
            this.$store.dispatch('add_new_token', res.data.token)
            this.$ls.set('token', res.data.token, 14400000)
            this.$router.push('/dashboard')
          }
        })
      }
    },
    computed: {
      getTokenFromState: function () {
        return this.$store.state.token
      }
    },
    mounted: function () {
      if (this.$ls.get('token') !== null && this.$ls.get('token') !== '') {
        this.$router.push('/dashboard')
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../assets/master";

</style>
