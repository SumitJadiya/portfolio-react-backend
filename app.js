const express = require('express')
const morgan = require('morgan')

const app = express()

// for swagger documentation
const swaggerUi = require('swagger-ui-express')
const yaml = require('yamljs')
const swaggerDocument = yaml.load('./swagger/swagger.yaml')
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

// regular middleware
app.use(express.json())

// morgan middleware
app.use(morgan('tiny'))

// export app js
module.exports = app
