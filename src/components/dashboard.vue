<template>
  <div class="dashboard">
    <h1>Dashboard</h1>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'dashboard',
    data() {
      return {}
    },
    mounted: function () {
      let config = {
        headers: {'Authorization': 'bearer ' + this.$ls.get('token')}
      }

      axios.get('http://localhost:2000/dashboard', config).then((res) => {
        console.log(res)
      }).catch((e) => {
        if (e.response.status === 401) {
          this.$router.push('/')
        }
      })
    }
  }
</script>

<style lang="scss" scoped>
  @import "../assets/master";

</style>
