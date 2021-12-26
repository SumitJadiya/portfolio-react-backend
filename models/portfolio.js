const mongoose = require('mongoose')

const portfolioSchema = mongoose.Schema({
  projects: [
    {
      title: String,
      category: String,
      image: String,
      url: String,
    },
  ],
})

module.exports = mongoose.model('Porfolio', portfolioSchema)
