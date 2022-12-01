const mongoose = require('mongoose')

// eslint-disable-next-line prefer-const
let connectionString = process.env.MONGODB_CONNECTION_STRING || 'mongodb://localhost:27017'

mongoose.set('debug', true)

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('connection established'))
  .catch(error => console.log('not connected:', error))

/* const Panda = mongoose.model('Panda', { name: String, age: Number })

async function main() {
  const pandas = await Panda.find({ age: { $lte: 21 } })
  console.log(pandas)
}

main() */
// const panda = new Panda({ name: 'anna', age: 19 })
// panda.save().then(() => console.log(`we have a new panda, ${panda.name}!`))

/* my index.js under models
const User = require('./user')
const Product = require('./product')
// const Review = require('./review')

const kerem = new User('kerem', 11)
const mete = new User('mete', 7)

const teddyBear = new Product('teddy bear', 19.99)
const kitty = new Product('kitty', 14.99)
const bunny = new Product('bunny', 9.99)
const froglet = new Product('froglet', 9.99)
const products = [teddyBear, kitty, bunny, froglet]

mete.greet()

kerem.addToBasket(kitty)
mete.addToBasket(teddyBear)

kerem.likeProduct(kitty)

kerem.review(kitty, 'Wonderful toy!', 5)

console.log(kerem)
console.log(mete)

console.log(kitty)

module.exports = { products }

*/
