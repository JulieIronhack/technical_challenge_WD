require('dotenv').config();

const express = require('express');
const logger = require('morgan');
const createError = require('http-errors');

//**Load configuration */
require('./config/db.config');
const app = express();

app.use(express.json());
app.use(logger('dev'));

const api = require('./config/routes.config');
app.use('/api/v1', api);

//** Error handling */
app.use((req, res, next) => {
  throw new Error('Something went wrong');
});

app.use((req, res, next) => next(createError(404, "Route not found")));

app.use((error, req, res, next) => {
  if (!error.status) {
    error = createError(500, error);
  }

  console.error(error);

  const data = {
    message: error.message
  };

  res.status(error.status)
    .json();
});


const port = process.env.PORT || 3001;
app.listen(port, () => console.info(`Application is running at port ${port}`));