const express = require('express')

const router = express.Router()

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: `Zeynep's Project : Joy Toys` })
})

module.exports = router
