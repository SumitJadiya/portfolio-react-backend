const express = require('express')
const { createContact } = require('../controllers/contact')

const router = express.Router()

router.route('/contact').post(createContact)

module.exports = router
