const Contact = require('../models/contact')
const mailHelper = require('../utils/emailHelper')

exports.createContact = async (req, res) => {
  const contact = await Contact.create(req.body)

  const { contactName, contactEmail, contactSubject, contactMessage } = req.body

  const option = {
    name: contactName,
    email: contactEmail,
    subject: contactSubject,
    message: contactMessage,
  }
  try {
    console.log('sending email ..')
    await mailHelper(option)
  } catch (ex) {
    console.error(ex.message)
    res.status(502).send('unable to fulfil the request!')
  }

  res.status(200).json({
    success: true,
    message: 'mail sent successfully!',
    contact,
  })
}
