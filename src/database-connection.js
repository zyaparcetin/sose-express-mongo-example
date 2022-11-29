const mongoose = require('mongoose')

const username = process.env.MONGODB_USERNAME
const password = process.env.MONGODB_PASSWORD
const dbName = process.env.MONGODB_DATABASE

// eslint-disable-next-line prefer-const
let connectionString = process.env.MONGODB_CONNECTION_STRING || 'mongodb://localhost:27017'
// let connectionString = process.env.`mongodb+srv://${username}:<${password}>@cluster0.mqz6yke.mongodb.net/${dbName}?retryWrites=true&w=majority` || 'mongodb://localhost:27017'

mongoose.set('debug', true)

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('connection established'))
  .catch(error => console.log('not connected:', error))

const Panda = mongoose.model('Panda', { name: String })
const lili = new Panda({ name: 'lili' })
lili.save().then(() => console.log('we have a new panda!'))
