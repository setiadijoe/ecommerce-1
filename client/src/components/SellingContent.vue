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
            <a href="#" class="card-link">{{ item.price }}</a>
          </div>
          <div class="card-footer text-muted">
            {{ item.category }}
          </div>
        </div>
      </div>

</template>

<script>
import { mapState } from 'vuex'
export default {
  props: ['item'],
  computed: {
    ...mapState([
      'loginStatus', 'isAdmin'
    ])
  }
}
</script>

<style>

</style>
