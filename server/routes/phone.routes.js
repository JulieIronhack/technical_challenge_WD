const router = require("express").Router();
const mongoose = require("mongoose");

const Phone = require("../models/Phone.model");

router.get("/phones", (req, res, next) => {
  Phone.find()
    .then((response) => {
      res.json(response);
    })
    .catch((error) => res.json(error));
});

router.get("/phones/:phoneId", (req, res, next) => {
  const { phoneId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(phoneId)) {
    res.status(400).json({ errorMessage: "Specified id is not valid" });
    return;
  }

  Phone.findById(phoneId)
    .then((response) => {
      res.json(response);
    })
    .catch((error) => res.json(error));
});

module.exports = router;
