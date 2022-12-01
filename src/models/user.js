const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  bio: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
})

class User {
  greet(person) {
    console.log(`Hello ${person.name}, this is ${this.name}`)
  }

  get profile() {
    return `
      # ${this.name} (${this.age})
      Bio: ${this.bio}
    `
  }

  set profile(newValue) {
    throw new Error(`profile is only a getter. You can't override it with ${newValue}.`)
  }
}

userSchema.loadClass(User)
userSchema.plugin(autopopulate)

module.exports = mongoose.model('User', userSchema)

/* 
const Review = require('./review')

class User {
  constructor(name, age) {
    this.name = name
    this.age = age
    this.likes = []
    this.basket = []
    this.reviews = []
  }

  greet() {
    console.log(`Hello ${this.name}, welcome to Joy Toys!`)
  }

  likeProduct(product) {
    this.likes.push(product)
    product.likedBy.push(this.name)
  }

  addToBasket(product) {
    this.basket.push(product)
  }

  review(product, text, rate) {
    const review = new Review(text, rate, this.name)
    this.reviews.push(review)
    product.reviews.push(review)
  }
}

module.exports = User

*/
