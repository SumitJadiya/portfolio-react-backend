const express = require('express')
const { addPortfolio, updatePortfolio } = require('../controllers/portfolio')
const router = express.Router()

router.route('/addPortfolio').post(addPortfolio)
router.route('/updatePortfolio/:id').put(updatePortfolio)

module.exports = router
