const mongoose = require('mongoose')

const resumeSchema = mongoose.Schema({
  skillmessage: {
    type: String,
  },
  education: [
    {
      school: String,
      degree: String,
      graduated: String,
      description: String,
    },
  ],
  work: [
    {
      company: String,
      title: String,
      years: String,
      years: String,
    },
  ],
  skills: [
    {
      name: String,
      level: String,
    },
  ],
})

module.exports = mongoose.model('Resume', resumeSchema)
