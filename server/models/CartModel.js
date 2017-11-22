const mongoose = require('mongoose')
const Schema = mongoose.Schema

const cartSchema = new Schema({
  buyer: {
    type: Schema.Types.ObjectId,
    ref: 'Users'
  },
  transactiondate: {
    type: Date,
    default: Date.now
  },
  hasPaid: {
    type: Boolean,
    default: false
  },
  itemslist: [{
    itemId: {
      type: Schema.Types.ObjectId,
      ref: 'Items'
    },
    name: String,
    price: Number, 
    amount: {
      type: Number,
      default: 0
    }
  }]
})

const Cart = mongoose.model('Carts', cartSchema)

module.exports = Cart