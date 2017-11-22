<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="row">
      <div class="col-md-8">
        <div class="row">
          <selling-content v-for="item in items" :key="item._id" :item="item"></selling-content>
        </div>
      </div>
      <div class="col-md-4">
        <side-bar></side-bar>
      </div>
    </div>
  </div>
</template>

<script>
import SellingContent from '@/components/SellingContent'
import SideBar from '@/components/SideBar'
import { mapState, mapActions, mapMutations } from 'vuex'
export default {
  components: {
    SellingContent,
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
