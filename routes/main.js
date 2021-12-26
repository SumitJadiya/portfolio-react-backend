const express = require('express')
const { test, addMainItem } = require('../controllers/main')
const router = express.Router()

router.route('/').get(test)

router.route('/addMain').post(addMainItem)
module.exports = router
