const express = require("express");
const route = express.Router();

route.get("/phones", (req, res) => {
  res.send("Get phones works");
});
route.get("/phones/:id", (req, res) => {
  res.send("Get single phone works");
});

module.exports = route;
