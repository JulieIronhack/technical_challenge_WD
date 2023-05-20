const express = require("express");
const route = express.Router();

const phones = require("../controllers/routes.controllers");

route.get("/phones", phones.listPhones);
route.get("/phones/:id", (req, res) => {
  res.send("Get single phone works");
});

module.exports = route;
