<template>
    <div class="sidebar col-md-4" id="sidebar">
    <a href="#" class="list-group-item list-group-item-action active">
        <h4 class="list-group-item-heading">Your Shopping Cart</h4>
    </a>
    <table class="table table-striped table-hover table-bordered table-responsive-md">
        <thead class="thead-blue">
            <tr>
            <th>Your Items</th>
            <th>Price</th>
            <th>Amount</th>
            </tr>
        </thead>
        <tbody>
            <tr class="table-success" v-for="item in cartslist" :key="item._id">
                <td>{{ item.name }}</td>
                <td>$ {{ item.price }}</td>
                <td>{{ item.amount }}</td>
            </tr>
        </tbody>
    </table>
    <button class="btn btn-success" @click="checkoutToPay()">Checkout</button>
</div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Checkout from '@/components/Checkout'
export default {
  data () {
    return {
      showModal: false
    }
  },
  components: {
    Checkout
  },
  computed: {
    ...mapState(['cartslist'])
  },
  methods: {
    ...mapActions(['checkout']),
    checkoutToPay () {
      this.$router.push('/checkout')
      this.checkout()
      window.location.reload()
    }
  }
}
</script>

<style scoped>
.wrapper {
    display: block;
}

h4 {
    color: white
}

#sidebar {
    height: 100vh;
    position: fixed;
    top: 100px;
    right: 0;
    /* top layer */
    z-index: 9999;
}

.overlay {
    /* full screen */
    width: 100vw;
    height: 100vh;
    /* transparent black */
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    top: 0;
    left: 0;
    display: none;
    /* middle layer, i.e. appears below the sidebar */
    z-index: 9998;
}

#dismiss {
    width: 35px;
    height: 35px;
    position: absolute;
    /* top right corner of the sidebar */
    top: 10px;
    right: 10px;
}
</style>
