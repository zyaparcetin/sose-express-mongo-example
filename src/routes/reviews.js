const express = require('express')
// const { reviews } = require('../models') // Terminal: 'reviews' is assigned a value but never used.

const router = express.Router()

/* GET reviews listing. */
/* router.get('/', (req, res, next) => {
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
}) */
module.exports = router
