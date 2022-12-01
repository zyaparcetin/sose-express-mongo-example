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
  const Kerem = await User.create({ name: 'Kerem', age: 11 })
  const Mete = await User.create({ name: 'Mete', age: 7 })

  const teddyBearProduct = await Product.create({ name: 'teddyBear', price: 19.99 })
  const kittyProduct = await Product.create({ name: 'kitty', price: 14.99 })
  const bunnyProduct = await Product.create({ name: 'bunny', price: 9.99 })
  const frogletProduct = await Product.create({ name: 'froglet', price: 9.99 })

  await Kerem.likeProduct(teddyBearProduct)
  await Kerem.addToBasket(teddyBearProduct)

  console.log(Kerem)
  res.sendStatus(200)
})

/* POST user */
router.post('/', async (req, res) => {
  const createdUser = await User.create(req.body)
  res.status(201).send(createdUser)
})

// with userId
router.get('/:userId', async (req, res) => {
  const user = await User.findById(req.params.userId)

  if (user) res.render('user', { user })
  else res.sendStatus(404)
})

// to delete user with Id
router.delete('/:userId', async (req, res) => {
  await User.findByIdAndDelete(req.params.userId)
  res.sendStatus(200)
})

module.exports = router
