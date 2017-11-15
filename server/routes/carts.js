var express = require('express');
var router = express.Router();
const Cart = require('../controllers/carts')
const Auth = require('../helpers/auth')

router.get('/', Auth.hasLogin, Cart.getAllCart)
router.post('/', Auth.hasLogin, Cart.addCart)
router.delete('/:id', Auth.hasLogin, Cart.removeCart)

module.exports = router