require("dotenv").config();

const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const createError = require("http-errors");

const app = express();

app.use((req, res, next) => {
  res.set("Acces-Control-Allow-Origin", "http://localhost:3000");
  res.set("Acces-Control-Allow-Methods", "GET");
  next();
});

require("./config/db-config");

app.use(express.json());
app.use(logger("dev"));

const routes = require("./config/routes.config");
app.use("/api/v1", routes);

app.use((req, res, next) => next(createError(404, "Route not found")));

app.use((error, req, res, next) => {
  const data = {};

  console.error(error);

  if (error instanceof mongoose.Error.ValidationError || error.status === 400) {
    error.status = 400;
    data.errors = error.errors;
  } else if (error instanceof mongoose.Error.CastError) {
    error = createError(404, "Resource not found");
  }

  data.message = error.message;

  res.status(error.status || 500);
  res.send(data);
});

const port = process.env.PORT || 3001;

app.listen(port, () =>
  console.log(`The Phone Cave API running at port ${port}`)
);
