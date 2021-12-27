const mongoose = require('mongoose')

const contactSchema = mongoose.Schema({
  contactName: String,
  contactEmail: String,
  contactSubject: String,
  contactMessage: String,
  receivedAt: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model('Contact', contactSchema)
