class Product {
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

module.exports = Product
