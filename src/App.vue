<template>
  <div id="app">
    <table>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Gender</th>
        <th>Age</th>
      </tr>
      <tr v-for="usr in users" :key="usr.id" @click="fetchUserInfo(usr.id)">
        <td>{{ usr.id }}</td>
        <td>{{ usr.name }}</td>
        <td>{{ usr.gender }}</td>
        <td>{{ usr.age }}</td>
        <td><button @click="fetchUserInfo(usr.id)">get info</button></td>
      </tr>
    </table>

    <hr/>
    <div>ID: {{ userInfo.id }}</div>
    <div>Name: {{ userInfo.name }}</div>
    <div>Gender: {{ userInfo.gender }}</div>
    <div>Age: {{ userInfo.age }}</div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'app',
  computed: {
    ...mapGetters({
      users: 'users/getUsers',
      userInfo: 'users/getUserInfo'
    })
  },
  async mounted () {
    await this.fetchUsers()
  },
  methods: {
    ...mapActions({
      fetchUsers: 'users/fetchUsers',
      fetchUserInfo: 'users/fetchUserInfo'
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
