const mongoose = require('mongoose')
const Schema = mongoose.Schema

const itemSchema = new Schema({
  item: {
    type: String,
    required: [true, 'Input Item Name']
  },
  price: {
    type: Number,
    required: [true, 'Insert with Number']
  },
  category: {
    type: String,
    enum: ['tools', 'food', 'outfits'],
    required: true
  },
  imgUrl: {
    type: String,
    required: [true, 'insert image URL']
  }
})

const Item = mongoose.model('Items', itemSchema)

module.exports = Item