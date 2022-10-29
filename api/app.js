const createError = require("http-errors");
const express = require("express");


const app = express();

app.use((req, res, next) => {
  res.set("Access-Control-Allow-Origin", "http://localhost:3000");
  res.set("Access-Control-Allow-Headers", "content-type");
  res.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PATCH, DELETE");
  res.set("Access-Control-Allow-Credentials", "true");
  next();
});

app.use(express.json());


const routes = require("./config/routes.config.js");
app.use("/", routes);


app.use((req, res, next) => next(createError(404, "Route not found")));


app.use((error, req, res, next) => {
  const data = {};

  console.error(error);

  // if (error instanceof mongoose.Error.ValidationError || error.status === 400) {
  //   error.status = 400;
  //   data.errors = error.errors;
  // } else if (error instanceof mongoose.Error.CastError) {
  //   error = createError(404, "Resource not found");
  // }

  data.message = error.message;

  res.status(error.status || 500);
  res.send(data);
});



if (process.env.NODE_ENV !== "test") {
  const port = process.env.PORT || 3001;

  app.listen(port, () =>
    console.log(`The Phone Cave running at port ${port}`)
  );
}

module.exports = app;
