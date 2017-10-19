<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'app',
    mounted() {
      this.$store.dispatch('load_Token', this.getTokenFromStorage)
    },
    computed: {
      getTokenFromStorage: function () {
        console.log(this.$ls.get('token'))
        return this.$ls.get('token')
      }
    }
  }
</script>

<style>
  #app {

  }
</style>
