const mongoose = require('mongoose')

const testimonialsSchema = mongoose.Schema({
  testimonials: [
    {
      text: String,
      user: String,
    },
  ],
})

module.exports = mongoose.model('Testimonials', testimonialsSchema)
