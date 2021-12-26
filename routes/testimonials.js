const express = require('express')
const router = express.Router()

router.route('/', (req, res) => {
  res.send('test')
})

module.exports = router
