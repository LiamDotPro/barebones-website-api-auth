<template>
  <div class="user-list">
    <ul>
      <template v-for="user in users">
        <li>{{user.userName}}</li>
      </template>
    </ul>
    <form @submit.prevent="addUser">
      <input v-model="email" required>
      <input v-model="password" required>
      <button type="submit">Add User</button>
    </form>
    <h2>{{error}}</h2>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'user-list',
    data() {
      return {
        users: [],
        email: '',
        password: '',
        error: ''
      }
    },
    methods: {
      addUser: function () {
        let config = {
          headers: {'Authorization': 'bearer ' + this.$ls.get('token')}
        }
        let body = {
          email: this.email, password: this.password
        }
        axios.post('http://localhost:2000/registerUser', body, config).then((res) => {
          console.log(res)
          if (res.data.msg) {
            switch (res.data.msg) {
              case 'Fail - Duplicate Account':
                this.error = res.data.msg
                break
              case 'New Account Created.':
                this.error = res.data.msg
                break
              case 'Password not long enough':
                this.error = res.data.msg
                break
            }
          }
        })
      }
    },
    mounted: function () {
      let config = {
        headers: {'Authorization': 'bearer ' + this.$ls.get('token')}
      }

      axios.get('http://localhost:2000/userList', config).then((res) => {
        this.users = res.data
      })
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/master";

</style>
