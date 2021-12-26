require('dotenv').config()
const app = require('./app')
const connectWithDB = require('./config/db')

connectWithDB()

app.listen(process.env.PORT, () => {
  console.log(`Server is running at ${process.env.PORT}`)
})
