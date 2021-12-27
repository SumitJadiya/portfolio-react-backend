const nodemailer = require('nodemailer')

const mailHelper = async (option) => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    auth: {
      user: process.env.SMTP_USERNAME,
      pass: process.env.SMTP_PASSWORD,
    },
  })

  const message = {
    from: '"Sumit Jadiya" <stj11bitd@gmail.com>', // sender address
    to: option.email, // list of receivers
    bcc: 'jadiyaskj@gmail.com',
    subject: option.subject, // Subject line
    text: option.message, // plain text body
  }

  // send mail with defined transport object
  const info = await transporter.sendMail(message)
}

module.exports = mailHelper
