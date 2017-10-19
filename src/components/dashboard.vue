<template>
  <div class="dashboard">
    <h1>Dashboard</h1>
    <button @click="logout">logout</button>
    <user-list></user-list>
  </div>
</template>

<script>
  import axios from 'axios'
  import userList from '../components/dashboard/user-list'

  export default {
    name: 'dashboard',
    components: {
      userList
    },
    data() {
      return {}
    },
    methods: {
      logout: function () {
        // Remove Token
        this.$store.dispatch('empty_token')
        // Remove Token from Storage
        this.$ls.remove('token')
        // redirect to homepage
        this.$router.push('/')
      }
    },
    mounted: function () {
      let config = {
        headers: {'Authorization': 'bearer ' + this.$ls.get('token')}
      }

      axios.get('http://localhost:2000/dashboard', config).then((res) => {
        console.log(res)
      }).catch((e) => {
        if (e.response.status === 401) {
          // remove token on error
          this.$store.dispatch('empty_token')
          // empty localstorage
          this.$ls.remove('token')
          // redirect to homepage
          this.$router.push('/')
        }
      })
    }
  }
</script>

<style lang="scss" scoped>
  @import "../assets/master";

</style>
