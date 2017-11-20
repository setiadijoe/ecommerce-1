<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <navbar></navbar>
    <div class="row">
      <selling-content v-for="item in items" :key="item._id" :item="item"></selling-content>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import SellingContent from '@/components/SellingContent'
import SideBar from '@/components/SideBar'
import { mapState, mapActions, mapMutations } from 'vuex'
export default {
  components: {
    SellingContent,
    Navbar,
    SideBar
  },
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Treasure Hunt'
    }
  },
  computed: {
    ...mapState(['items'])
  },
  methods: {
    ...mapActions(['getAllItems']),
    ...mapMutations(['changeLoginStatus'])
  },
  mounted () {
    if (localStorage.getItem('token') !== null) {
      this.getAllItems()
      var status = {
        login: true,
        admin: localStorage.getItem('isAdmin')
      }
      this.changeLoginStatus(status)
    } else {
      this.getAllItems()
      var state = {
        login: false,
        admin: localStorage.getItem('isAdmin')
      }
      this.changeLoginStatus(state)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h1, h2 {
  font-weight: bold;
  margin-top: 50px;
  font-family: 'Sofia';
  color: blueviolet
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
