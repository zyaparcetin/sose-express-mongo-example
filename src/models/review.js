const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')

const reviewSchema = new mongoose.Schema({
  text: String,
  rate: Number,
  author: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      autopopulate: true,
    },
  ],
})

reviewSchema.plugin(autopopulate)
module.exports = mongoose.model('Review', reviewSchema)

/* class Review {
  constructor(text, rate, author) {
    this.text = text
    this.rate = rate
    this.author = author
  }
}

module.exports = Review
*/
