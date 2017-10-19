<template>
  <div class="home">
    <h1>hello</h1>
    <router-link to="/login">
      <button>Login Page</button>
    </router-link>
    <h2>{{getTokenFromState}}</h2>
  </div>
</template>

<script>
  export default {
    name: 'home',
    data() {
      return {
        msg: ''
      }
    },
    methods: {
    },
    computed: {
      getTokenFromState: function () {
        return this.$store.state.token
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../assets/master";

</style>
