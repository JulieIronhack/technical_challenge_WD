const express = require("express");
const router = express.Router();
const data = require("../../phone-cave/data/phones.json");

router.get("/", (req, res, next) => {
  res.status(200).json("HomePage");
});

// Get all phones
router.get("/phones", (req, res, next) => {
  res.status(200).json(data);
});

// get a phone by phone id
router.get("/phone/:id", (req, res, next) => {
  const phoneId = req.params.id;
  const phone = data.filter((phone) => Number(phone.id) === Number(phoneId))[0];
  res.status(200).json(phone);
});

module.exports = router;
