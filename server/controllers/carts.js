const Cart = require('../models/CartModel')
const Item = require('../models/ItemModel')

const getAllCart = (req, res) => {
  Cart.find({buyer: req.headers.id})
  .populate('buyer')
  .populate('itemslist')
  .then(carts => {
    res.status(200).send(carts)
  })
  .catch(err => res.status(500).send(err))
}

const addCart = (req, res) => {
  let cart = new Cart({
    buyer: req.headers.id,
    itemslist: req.body.items
  })
  cart.save()
  .then(carts => {
    res.status(200).send({
      message: 'Add items in cart',
      carts
    })
  })
  .catch(err => res.status(500).send(err))
}

const removeCart = (req, res) => {
  Cart.findByIdAndRemove(req.params.id)
  .then(remove => {
    res.status(200).send({
      message: 'Remove your cart',
      remove
    })
  })
  .catch(err => res.status(500).send(err))
}

module.exports = {
  getAllCart,
  addCart,
  removeCart
}