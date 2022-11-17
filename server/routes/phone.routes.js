const router = require("express").Router();
const mongoose = require("mongoose");

//We do not need Phone model because we are using static data, we will not use MongoDB
//const Phone = require("../models/Phone.model");

//Import static data
const phonesData = require("../data/phones.json");

// GET /api/phones  -  Get list of phones
router.get("/phones", (req, res, next) => {
  res.json(phonesData);
});

//  GET /api/phones/:phoneId -  Retrieves a specific phone by id
router.get("/phones/:id", (req, res, next) => {
  const phoneId = req.params.id;

  const phone = phonesData.filter((eachPhone) => {
    return eachPhone.id == phoneId;
  });

  res.json(phone[0]);
});

module.exports = router;
