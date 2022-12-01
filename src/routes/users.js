const express = require('express')
const User = require('../models/user')
const Product = require('../models/product')

const router = express.Router()

/* GET users listing. */
router.get('/', async (req, res) => {
  const query = {}
  res.send(await User.find(query).catch(error => console.log('Users not found, error: ', error)))
})

/* GET initialize */
router.get('/initialize', async (req, res) => {
  const kerem = await User.create({ name: 'kerem', age: 11 })
  const armagan = await User.create({ name: 'armagan', age: 36 })

  const teddyBearProduct = await Product.create({ name: 'teddyBear', price: 14.99 })
  // const // tüm productlari yaz!

  await armagan.likeProduct(teddyBearProduct)
  await armagan.addToBasket(teddyBearProduct)

  console.log(armagan)
  res.sendStatus(200)
})

/* POST user */
router.post('/', async (req, res) => {
  const createdUser = await User.create(req.body)
  res.status(201).send(createdUser)
})

router.delete('/:userId', async (req, res) => {
  await User.findByIdAndDelete(req.params.userId)
  res.sendStatus(200)
})

module.exports = router
