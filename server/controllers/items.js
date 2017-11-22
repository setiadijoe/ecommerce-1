const Item = require('../models/ItemModel')

const getAllItems = (req, res) => {
  Item.find()
  .then(allitems => {
    console.log('====================================');
    console.log('sukses gak?');
    console.log('====================================');
    res.status(200).send(allitems)
  })
  .catch(err => {
    console.log('====================================');
    console.log('error gak?');
    console.log('====================================');
    res.status(500).send(err)
  })
}

const addNewItem = (req, res) => {
  let item = new Item({
    item: req.body.item,
    price: req.body.price,
    category: req.body.category,
    imgUrl: req.body.imgUrl
  })
  item.save()
  .then(newItem => {
    res.status(200).send({
      message: 'New item has been added',
      newItem
    })
  })
  .catch(err => {
    console.log('==============INI ERROR======================');
    console.log(err);
    console.log('====================================');
    res.status(500).send(err)
  })
}

const updateAnItem = (req, res) => {
  Item.findByIdAndUpdate(req.params.id, {
    $set: {
      price: req.body.price
    }
  }, { new: true })
  .then(updateItem => {
    res.status(200).send({
      message: 'Item has been updated',
      updateItem
    })
  })
  .catch(err => res.status(500).send(err))
}

const removeItem = (req, res) => {
  Item.findByIdAndRemove(req.params.id)
  .then(remove => {
    res.status(200).send({
      message: 'Item has been removed',
      remove
    })
  })
  .catch(err => res.status(500).send(err))
}

module.exports = {
  getAllItems,
  addNewItem,
  updateAnItem,
  removeItem
}