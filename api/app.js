require("dotenv").config();

const express = require("express");

const createError = require("http-errors");

const phones = require("../.vscode/api/phones.json")

app.get('/telephones', (req, res) => {
    res.json(phones);
  });

app.use((error, req, res, next) => {
  if (
    error instanceof mongoose.Error.CastError &&
    error.message.includes("ObjectId")
  ) {
    error = createError(404, "Resource not found");
  } else if (error instanceof mongoose.Error.ValidationError) {
    error = createError(400, error);
  } else if (!error.status) {
    error = createError(500, error);
  }

  console.error(error);

  const data = {};
  data.message = error.message;
  if (error.errors) {
    data.errors = Object.keys(error.errors).reduce(
      (errors, key) => ({
        ...errors,
        [key]: error.errors[key]?.message || error.errors[key],
      }),
      {}
    );
  }

  res.status(error.status).json(data);
});

module.exports = app;
