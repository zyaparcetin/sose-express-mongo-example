// const express = require('express')
// const { products } = require('../models')

// const router = express.Router()

/* GET products listing. */
/* router.get('/', (req, res, next) => {
  const query = {}
  res.send(await User.find(query).catch(error => console.log('Users not found, error: ', error))) // users.js'teki gibi yazmaya calistim, hata verdi
}) */
//  res.send(products)
/* GET initialize */
/* router.get('/initialize', async (req, res) => {
  const mihri = await User.create({ name: 'mihri', age: 35 })
  const armagan = await User.create({ name: 'armagan', age: 36 })

  const steve = await User.create({ name: 'steve', age: 21 })
  steve.bio = 'An awesome hacker who has seen it all, and now sharing them all with you.'

  steve.greet(mihri)
  steve.greet(armagan)

  console.log(steve)
  res.sendStatus(200)
}) */

/* POST user */
/* router.post('/', async (req, res) => {
  const createdUser = await User.create(req.body)
  res.status(201).send(createdUser)
})

module.exports = router */

/* from my project

router.get('/:productId', (req, res, next) => {
  const product = products[req.params.productId]
  if (!product)
    return res.render('error', {
      error: { status: 404 },
      message: `No product with id ${req.params.id} found`,
    })
  return res.send(product)
}) */

// module.exports = router

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
