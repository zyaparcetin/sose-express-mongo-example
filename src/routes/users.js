const express = require('express')
const User = require('../models/user')
// const Product = require('../models/product') bunu yazdim ama hata verdi (products.js'e gerek kalmamasi icin mi bunu yaiyoruz?)

const router = express.Router()

/* GET users listing. */
router.get('/', async (req, res) => {
  const query = {}
  res.send(await User.find(query).catch(error => console.log('Users not found, error: ', error)))
})

/* GET initialize */
router.get('/initialize', async (req, res) => {
  const mihri = await User.create({ name: 'mihri', age: 35 })
  const armagan = await User.create({ name: 'armagan', age: 36 })

  const steve = await User.create({ name: 'steve', age: 21 })
  steve.bio = 'An awesome hacker who has seen it all, and now sharing them all with you.'

  /* gitlab'daki kodda var 
  const berlinPhoto = await Photo.create({ filename: 'berlin.jpg' })
  const munichPhoto = await Photo.create({ filename: 'munich.jpg' })

  // videoda: 
  berlinPhoto.save()
  munichPhoto.save()
  
  await steve.addPhoto(berlinPhoto)
  await steve.addPhoto(munichPhoto)

  await armagan.likePhoto(berlinPhoto)
  await mihri.likePhoto(berlinPhoto)
*/
  steve.greet(mihri)
  steve.greet(armagan)

  console.log(steve)
  res.sendStatus(200)
})

/* POST user */
router.post('/', async (req, res) => {
  const createdUser = await User.create(req.body)
  res.status(201).send(createdUser)
})

module.exports = router

/* my project
const express = require('express')
const { users } = require('../models')

const router = express.Router() */

/* GET users listing. */
/* router.get('/', (req, res) => {
  let result = users

  if (req.query.name) {
    result = users.find(user => user.name === req.query.name)
  }
  res.send(result)
})

router.get('/:userID', (req, res) => {
  const user = users[req.params.userID]
  if (!user)
    return res.render('error', {
      error: { status: 404 },
      message: `No user with name ${req.params.name} found`,
    })
  return res.send(user)
})

module.exports = router */
