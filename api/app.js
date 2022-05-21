require("dotenv").config();

const express = require("express");
const logger = require("morgan");

/* Configs */

const app = express();

/** Middlewares */

// CORS config
app.use((req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Origin",
    process.env.CORS_ORIGIN || "http://localhost:3000"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "DELETE");

  if (req.method === "OPTIONS") {
    return res.status(200).send();
  }

  next();
});

app.use(express.json());
app.use(logger("dev"));


const routes = require("./config/routes.config");
app.use("/api", routes);

app.use((error, req, res, next) => {
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

const port = process.env.PORT || 3001;
app.listen(port, () => console.info(`Application running in port ${port}`));
