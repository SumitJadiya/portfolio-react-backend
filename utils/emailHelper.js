const nodemailer = require('nodemailer')

const mailHelper = async (option) => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    auth: {
      user: process.env.SMTP_USERNAME,
      pass: process.env.SMTP_PASSWORD,
    },
  })

  const updatedSubject = 'Contact Form Query by ' + option.name + ' - ' + option.subject

  const message = {
    from: '"Sumit Jadiya" <stj11bitd@gmail.com>', // sender address
    to: option.email, // list of receivers
    bcc: 'jadiyaskj@gmail.com',
    subject: updatedSubject, // Subject line
    text: option.message, // plain text body
  }

  // send mail with defined transport object
  await transporter.sendMail(message, (error, info) => {
    if (error) {
      console.log('Error while sending email - ' + error)
    } else {
      console.log('Email sent: ' + info.response)
    }
  })
}

module.exports = mailHelper
