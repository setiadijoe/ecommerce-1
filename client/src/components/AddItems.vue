<template>
  <form>
    <fieldset>
      <legend>Add Your Item</legend>

      <div class="form-group has-success">
        <label class="form-control-label">Item Name</label>
        <input type="text" class="form is-valid" v-model="additem.item">
      </div>

    <div class="form-group">
      <label for="exampleSelect1">Category</label>
      <select class="form" id="exampleSelect1" v-model="additem.category">
        <option>tools</option>
        <option>food</option>
        <option>outfits</option>
      </select>
    </div>

      <div class="form-group">
        <label class="col-form-label">Stock</label>
        <input type="number" class="form" v-model="additem.stock">
      </div>

      <div class="form-group">
        <label class="col-form-label">Image URL</label>
        <input type="text" class="form" v-model="additem.imgUrl">
      </div>

      <div class="form-group">
        <label class="control-label">Price</label>
          <label class="sr-only" for="exampleInputAmount">Amount (in dollars)</label>
          <label class="input-addon">$</label>
          <input type="number" class="form" placeholder="Amount" v-model="additem.price">
          <label class="input-addon">.00</label>
      </div>
      <button type="submit" class="btn btn-primary" @click.prevent="addItems(additem)">Submit</button>
    </fieldset>
  </form>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      additem: {
        item: '',
        category: '',
        stock: 0,
        price: 0,
        imgUrl: ''
      }
    }
  },
  methods: {
    ...mapActions(['addItems'])
  }
}
</script>

<style>

</style>
