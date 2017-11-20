<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input type="button" v-if="loginStatus === false" value="Sign In" @click="signIn()">
    <input type="button" v-else value="Sign Out" @click="signOut()">
      <div class="row">
        <selling-content v-for="item in items" :key="item._id" :item="item"></selling-content>
      </div>
  </div>
</template>

<script>
import SellingContent from '@/components/SellingContent'
import { mapState, mapActions, mapMutations } from 'vuex'
export default {
  components: {
    SellingContent
  },
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    ...mapState(['items', 'loginStatus'])
  },
  methods: {
    ...mapActions(['getAllItems']),
    ...mapMutations(['changeLoginStatus']),
    signIn () {
      this.$router.push('/signin')
    },
    signOut () {
      localStorage.removeItem('token')
      this.$router.push('/signin')
    }
  },
  mounted () {
    if (localStorage.getItem('token') !== null) {
      this.getAllItems()
      this.changeLoginStatus(true)
    } else {
      this.getAllItems()
      this.changeLoginStatus(false)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
