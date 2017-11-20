<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
      <a class="navbar-brand" href="#">My Ecommerce</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarColor01">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/additem" v-if="isAdmin === 'true'">Add Items</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
        </ul>
        <form class="form-inline my-2 my-md-0">
        <input type="button" class="btn btn-primary" v-if="loginStatus === false" value="Sign In" @click="signIn()">
        <input type="button" class="btn btn-danger" v-else value="Sign Out" @click="signOut()">
        </form>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['loginStatus', 'isAdmin'])
  },
  methods: {
    signIn () {
      this.$router.push('/signin')
    },
    signOut () {
      localStorage.removeItem('token')
      localStorage.removeItem('isAdmin')
      this.$router.push('/signin')
    }
  }
}
</script>

<style scoped>
.navbar {
  height: 20px;
}
div, ul, li, a {
  background-color: black
}
</style>
