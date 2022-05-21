require("dotenv/config");

const express = require("express");

const app = express();

require("./config")(app);

const phones = require("./phones.json");

app.get("/telephones", (req, res) => {
  res.json(phones);
});

module.exports = app;