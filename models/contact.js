const mongoose = require('mongoose')

const contactSchema = mongoose.Schema({
  name: String,
  email: String,
  subject: String,
  message: String,
  receivedAt: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model('Contact', contactSchema)
