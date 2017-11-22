const Cart = require('../models/CartModel')

const getAllCart = (req, res) => {
  Cart.find({buyer: req.headers.id, hasPaid: false})
  .populate('buyer')
  .populate('itemslist')
  .then(carts => {
    res.status(200).send(carts)
  })
  .catch(err => res.status(500).send(err))
}

const addCart = (req, res) => {
  console.log(req.body);
  let body = req.body
  let cart = new Cart({
    buyer: req.headers.id,
    itemslist: body
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

const updateProduct = (req, res) => {
  Cart.findByIdAndUpdate(req.params.id, {
    $set: {
      hasPaid: true
    }
  }, {new: true})
  .then(updated => {
    res.status(200).send({
      message: 'Item has been Paid',
      updated
    })
  })
  .catch(err => {
    res.status(500).send(err)
  })
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
  removeCart,
  updateProduct
}