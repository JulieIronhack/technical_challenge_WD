const { default: mongoose } = require("mongoose");

const router = require("express").Router();
//const Phone = require("../models/Phone.model");

const phones = require("../data/phones.json");

router.get("/phones", (req, res, next) => {
  console.log("hihihihiih");
  phones.find()
    .then((response) => res.json(response))
    .catch((err) => {
      console.log("error reading phones", err);
    });
});

router.get("/phones/:phoneId", (req, res, next) => {
  const { phoneId } = req.params;

  phones
    .findById(phoneId)
    .then((response) => res.json(response))
    .catch((err) => console.log("error reading phone details", err));
});

module.exports = router;
