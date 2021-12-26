const Testimonials = require('../models/testimonials')

exports.addTestimonials = async (req, res) => {
  const testimonials = await Testimonials.create(req.body)

  res.status(200).json({
    success: true,
    testimonials,
  })
}

exports.updateTestimonials = async (req, res) => {
  const testimonials = await Testimonials.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  })

  res.status(200).json({
    success: true,
    testimonials,
  })
}
