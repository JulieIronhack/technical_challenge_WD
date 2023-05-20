require('dotenv').config();

const express = require('express');
const logger = require('morgan');
const createError = require('http-errors');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const corsOptions = {
  origin: 'http://localhost:3000'
};

const app = express();

app.use(logger('dev'));
app.use(cors(corsOptions));


app.get('/phones', (req, res) => {
  const filePath = path.join(__dirname, '..', 'data', 'phones.json');

  fs.readFile(filePath, 'utf8', (error, data) => {
    if (error) {
      console.error('Error reading the database', error);
      res.status(500).send('Internal server error');
      return;
    }

    const phones = JSON.parse(data);
    res.json(phones);
  });
});

app.get('/phones/:id', (req, res) => {
  const phoneId = req.params.id;
  const filePath = path.join(__dirname, '..', 'data', 'phones.json');

  fs.readFile(filePath, 'utf8', (error, data) => {
    if (error) {
      console.error('Error reading the database', error);
      res.status(500).send('Internal server error');
      return;
    }

    const phones = JSON.parse(data);
    const phone = phones.find((phone) => phone.id === parseInt(phoneId));

    if (!phone) {
      res.status(404).send('Phone not found');
      return;
    }

    res.json(phone);
  })
});

app.use((req, res, next) => next(createError(404, 'Route not found')));

app.use((error, req, res, next) => {

  if (!error.status) {
    error = createError(500, error)
  }
  console.log(error);

  const data = {
    message: error.message,
  };

  if (error.errors) {
    const errors = Object.keys(error.errors)
      .reduce((errors, errorKey) => {
        errors[errorKey] = error.errors[errorKey]?.message || error.errors[errorKey];
        return errors;
      }, {});
    data.errors = errors;
  }

  res.status(error.status).json(data);
});

const port = process.env.PORT || 3001;
app.listen(port, () => console.info(`Application is running at port ${port}`));