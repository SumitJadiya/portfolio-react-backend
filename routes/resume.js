const express = require('express')
const { addResume, updateResume } = require('../controllers/resume')
const router = express.Router()

router.route('/addResume').post(addResume)
router.route('/updateResume/:id').put(updateResume)

module.exports = router
