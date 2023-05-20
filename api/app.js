// Configure environmet variables
require('dotenv').config()

// Require dependencies
const logger = require('morgan')
const createError = require('http-errors')
const express = require('express')

// Create express app
const app = express()

// Configure CORS
const cors = require('./config/cors.config')
app.use(cors)

// Configure public resources
app.use(express.static(`${__dirname}/public`))

// Configure request content-type header
app.use(express.json())

// Configure HTTP request middleware
app.use(logger('dev'))

// Configure routes
const routes = require('./config/routes.config.js')
app.use('/api/v1', routes)

// Configure handle errors
app.use((req, res, next) => {
  next(createError(404, `Resource not found`))
})

app.use((error, req, res, next) => {
  if (!error.status) {
    error = createError(500, error)
  }

  const data = {
    message: error.message
  }

  // Configure '.errors' property, if it exists
  if (error.errors) {
    const errors = Object.keys(error.errors)
      .reduce((errors, errorKey) => {
        errors[errorKey] = error.errors[errorKey]?.message
        return errors
      }, {})
      data.errors = errors
  }

  res.status(error.status).json(data)

})


// Configure port to start listening to
const port = process.env.PORT
app.listen(port, () => {
  console.info(`App is listening at por ${port}`)
})