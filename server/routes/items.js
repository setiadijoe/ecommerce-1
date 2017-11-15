var express = require('express');
var router = express.Router();
const Item = require('../controllers/items')
const Auth = require('../helpers/auth')

router.get('/', Item.getAllItems)
router.post('/', Auth.hasLogin, Auth.isAdmin, Item.addNewItem)
router.put('/:id', Auth.hasLogin, Auth.isAdmin, Item.updateAnItem)
router.delete('/:id', Auth.hasLogin, Auth.isAdmin, Item.removeItem)

module.exports = router;