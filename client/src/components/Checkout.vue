<template>
<div>
  <p>Hello {{ fixedbuy.buyer.name }}! This are what you want to buy!</p>
  <table class="table table-striped table-hover table-bordered table-responsive-md">
        <thead class="thead-dark">
          <tr>
            <th>Your Items</th>
            <th>Price</th>
            <th>Amount</th>
            <th>SubTotal</th>
          </tr>
        </thead>
        <tbody>
            <tr class="table-success" v-for="item in fixedbuy.itemslist" :key="item._id">
                <td>{{ item.name }}</td>
                <td>$ {{ item.price }}</td>
                <td>{{ item.amount }}</td>
                <td>$ {{ item.price * item.amount }}</td>
            </tr>
        </tbody>
    </table>
    <div class="btn-group" role="group" aria-label="Basic example">
      <button type="button" class="btn btn-danger" @click="cancelBuy()">CANCEL</button>
      <button type="button" class="btn btn-info" @click="pushPrice()">TOTAL</button>
      <button type="button" class="btn btn-primary" v-model="total">$ {{ total }}</button>
      <button type="button" class="btn btn-success" @click="paidProducts()">BRING IT</button>
    </div>
</div>



</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
      subtotal: [],
      total: 0
    }
  },
  computed: {
    ...mapState(['fixedbuy'])
  },
  methods: {
    ...mapActions(['getAllCarts', 'paidTheBill']),
    pushPrice () {
      console.log('data yang mau dihitung ', this.fixedbuy)
      let subtotal = this.fixedbuy.itemslist.map((a) => {
        return (a.amount * a.price)
      })
      console.log('APA DATANYA ', subtotal)
      this.total = subtotal.reduce((a, b) => { return a + b })
    },
    cancelBuy () {
      this.$router.push('/')
    },
    paidProducts () {
      alert('Thanks for buy our products')
      this.paidTheBill(this.fixedbuy)
      this.$router.push('/')
      window.location.reload()
    }
  },
  created () {
    this.getAllCarts()
  }
}
</script>

<style scoped>
table {
  margin-top: 30px
},
p {
  margin-top: 50px;
  font-family: 'Helvetica';
  font-size:16px;
  color: blue
}
</style>
