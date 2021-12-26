const Porfolio = require('../models/portfolio')
const Resume = require('../models/resume')
const Testimonials = require('../models/testimonials')
const Main = require('../models/main')

exports.getCompleteData = async (req, res) => {
  const main = await Main.find()
  const porfolio = await Porfolio.find()
  const resume = await Resume.find()
  const testimonials = await Testimonials.find()

  console.log(main)

  res.status(200).json({
    success: true,
    main: main[0],
    porfolio: porfolio[0],
    resume: resume[0],
    testimonials: testimonials[0],
  })
}
