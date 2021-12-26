const mongoose = require('mongoose')

const mainSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  occupation: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    required: true,
  },
  contactMessage: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
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

module.exports = mongoose.model('main', mainSchema)
