const express = require("express");
const router = express.Router();
const Phone = require("../models/Phone.model");

const url = new URL("https://localhost:3000");

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.get("/phones", (req, res, next) => {
  Phone.find()
    .then((phoneList) => {
      res.json(phoneList);
    })
    .catch((err) => {
      console.log("error getting all phones");
      res.status(500).json({
        message: "error getting all phones",
        error: err,
      });
    });
});

router.get("/phones/:phoneId", (req, res, next) => {
  const { phoneId } = req.params;

  Phone.findById(phoneId)
    .then((phone) => {
      res.json(phone);
    })
    .catch((err) => {
      console.log("error getting the phone", phoneId);
      res.status(500).json({
        message: `error getting the phone ${phoneId} `,
        error: err,
      });
    });
});

module.exports = router;
