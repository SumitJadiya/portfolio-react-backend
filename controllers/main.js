const Main = require('../models/main')

exports.test = (req, res) => {
  res.status(200).json({
    success: true,
    greeting: `Hello from main API!`,
  })
}

exports.addMainItem = async (req, res) => {
  const main = await Main.create(req.body)

  res.status(200).json({
    success: true,
    main,
  })
}

exports.updateMainData = async (req, res) => {
  const main = await Main.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  })

  res.status(200).json({
    success: true,
    main,
  })
}
