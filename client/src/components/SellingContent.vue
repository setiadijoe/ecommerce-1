<template>
      <div class="col-md-4">
        <div class="card">
          <h3 class="card-header">{{ item.item }}</h3>
          <div class="card-body">
            <h5 class="card-title">Our Selling Today</h5>
          </div>
          <center>
            <img style="height: 200px; display: block;" :src="item.imgUrl" :alt="item.imgUrl">
          </center>
          <div class="card-body">
            <p class="card-text">Grab it fast</p>
            <a class="card-link">$ {{ item.price }}</a>
            <button type="button" class="btn btn-info" v-if="loginStatus === true" @click="buyItems(item)">Buy</button>
          </div>
          <div class="card-footer text-muted">
            {{ item.category }}
          </div>
        </div>
      </div>

</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  props: ['item'],
  computed: {
    ...mapState([
      'loginStatus', 'isAdmin', 'cartslist'
    ])
  },
  methods: {
    ...mapMutations(['buyItems'])
  }
}
</script>

<style scoped>
.card-header {
  background-color: black;
  color: white
}
.card, .card-body{
  background-color: violet;
  background-image: url("https://www.transparenttextures.com/patterns/arches.png");
  color: black
}
.card-title, .card-text {
  background-color: #51e06d;
  background-image: url("https://www.transparenttextures.com/patterns/absurdity.png");
  
}
.card-footer {
  background-color: red;
  color: blue;
  font-weight: bold;
}

</style>
