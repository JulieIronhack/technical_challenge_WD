require('dotenv').config();

const express = require('express');
const logger = require('morgan');
const createError = require('http-errors')

const app = express();

const cors = require('./config/cors.config');
app.use(cors);
app.use(express.json())
app.use(logger('dev'));

app.use('', require('./config/routes.config'));

app.use((req, res, next) => next(createError(404, 'Route not found')))

app.use((error, req, res, next) => {
  if (!error.status) {
    error = createError(500, error);
  }
  console.log(error);

  const data = {
    message: error.message
  }

  res.status(error.status)
    .json(data)
})

const port = process.env.PORT || 3001
app.listen(port, () => console.info('Aplication running'))