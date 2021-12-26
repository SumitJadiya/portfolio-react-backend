const Resume = require('../models/resume')

exports.addResume = async (req, res) => {
  const resume = await Resume.create(req.body)

  res.status(200).json({
    success: true,
    resume,
  })
}

exports.updateResume = async (req, res) => {
  const resume = await Resume.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  })

  res.status(200).json({
    success: true,
    resume,
  })
}
