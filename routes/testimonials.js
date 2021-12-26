const express = require('express')
const { addTestimonials, updateTestimonials } = require('../controllers/testimonials')
const router = express.Router()

router.route('/addTestimonials').post(addTestimonials)
router.route('/updateTestimonials').put(updateTestimonials)

module.exports = router
