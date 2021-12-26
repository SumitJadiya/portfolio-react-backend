const mongoose = require('mongoose')

const mainSchema = mongoose.Schema({
  name: {
    type: String,
  },
  occupation: {
    type: String,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  bio: {
    type: String,
  },
  contactMessage: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  address: {
    street: {
      type: String,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    zip: {
      type: String,
    },
  },
  website: {
    type: String,
  },
  resumedownload: {
    type: String,
  },
  social: [
    {
      name: {
        type: String,
      },
      url: {
        type: String,
      },
      className: {
        type: String,
      },
    },
  ],

  message: {
    type: String,
  },
})

module.exports = mongoose.model('Main', mainSchema)
