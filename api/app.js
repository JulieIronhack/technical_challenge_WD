require('dotenv').config();

const express = require('express');
const logger = require('morgan');
const createError = require('http-errors');
const cors = require('./config/cors');

const app = express();

app.use(logger('dev'));
app.use(cors);

app.use('/api/v1', require('./config/routes.config'));

app.use((req, res, next) => next(createError(404, 'Route not found')))

app.use((error, req, res, next) => {
  if(!error.status) {
    error = createError(500, error);
  }

  const data = {
    message: error.message
  }

  res.status(error.status)
    .json(data)
})

const port = process.env.PORT || 3001;
app.listen(port, () => console.info(`App is running at port ${port}`));
