const express = require('express')
const { test, addMainItem, updateMainData } = require('../controllers/main')
const router = express.Router()

router.route('/main/test').get(test)

router.route('/addMain').post(addMainItem)
router.route('/updateMain/:id').put(updateMainData)
module.exports = router
