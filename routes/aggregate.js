const express = require('express')
const { getCompleteData } = require('../controllers/aggregate')

const router = express.Router()

router.route('/').get(getCompleteData)

module.exports = router
