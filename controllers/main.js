const Main = require('../models/main')

exports.test = (req, res) => {
  res.status(200).json({
    success: true,
    greeting: `Hello from main API!`,
  })
}

exports.addMainItem = async (req, res) => {
  console.log(req.body)
  const main = await Main.create(req.body)

  res.status(200).json({
    success: true,
    main,
  })
}
