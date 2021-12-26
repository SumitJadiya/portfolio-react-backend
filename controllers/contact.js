const Contact = require('../models/contact')
const mailHelper = require('../utils/emailHelper')

exports.createContact = async (req, res) => {
  const contact = await Contact.create(req.body)

  const { name, email, message, subject } = req.body

  const option = {
    email,
    subject: 'tshirtStore | password reset email',
    message,
  }
  await mailHelper(option)

  res.status(200).json({
    success: true,
    message: 'mail sent successfully!',
    contact,
  })
}
