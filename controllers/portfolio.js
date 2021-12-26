const Porfolio = require('../models/portfolio')

exports.addPortfolio = async (req, res) => {
  const portfolio = await Porfolio.create(req.body)

  res.status(200).json({
    success: true,
    portfolio,
  })
}

exports.updatePortfolio = async (req, res) => {
  const portfolio = await Porfolio.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  })

  res.status(200).json({
    success: true,
    portfolio,
  })
}
