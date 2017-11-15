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
  itemslist: [{
    type: Schema.Types.ObjectId,
    ref: 'Items'
  }]
})

const Cart = mongoose.model('Carts', cartSchema)

module.exports = Cart