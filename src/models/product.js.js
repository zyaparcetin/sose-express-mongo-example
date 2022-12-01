const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  likedBy: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      autopopulate: true,
    },
  ],
  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      autopopulate: true,
    },
  ],
})

productSchema.plugin(autopopulate)
module.exports = mongoose.model('Product', productSchema)

/* class Product {
  constructor(name, price) {
    this.name = name
    this.price = price
    this.likedBy = []
    this.reviews = []
  }

  get detail() {
    return `
      Product: ${this.name} , ${this.price}
      Liked by: ${this.likedBy}
      Reviewed by: ${this.reviewedBy}
      `
  }
}

module.exports = Product */
