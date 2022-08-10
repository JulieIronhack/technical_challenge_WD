const router = require("express").Router();
const mongoose = require("mongoose");
const data = require("../db/phones.json");


router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.get("/phones", (req, res, next) => {
  res.json(data);
});

router.get("/phones/:id", (req, res, next) => {
  const { id } = req.params

  let phoneDetail = data.find(phone => phone.id === parseInt(id))
  res.json(phoneDetail);

});

module.exports = router;
