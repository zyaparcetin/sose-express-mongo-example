const express = require('express')
const { products } = require('../models')

const router = express.Router()

/* GET products listing. */
router.get('/', (req, res, next) => {
  res.send(products)
})

router.get('/:productId', (req, res, next) => {
  const product = products[req.params.productId]
  if (!product)
    return res.render('error', {
      error: { status: 404 },
      message: `No product with id ${req.params.id} found`,
    })
  return res.send(product)
})

module.exports = router

/* router.get('/:name', (req, res) => {
  const user = users.find(u => u.name === req.params.name)

  if (!user)
    return res.render('error', {
      error: { status: 404 },
      message: `No user with name ${req.params.name} found`,
    })

  return res.send(user)
})

router.get('/:userId', (req, res) => {
  return res.send(users[req.params.userId])
}) */
