
const Phone = require("../models/Phone.model");
const mongoose = require("mongoose");
const express = require("express");
const router = require("express").Router();

router.get("/phones", (req, res, next) => {

  Phone.find()
    .then((response) => {
    return res.json(response);
    })
    .catch((err) => console.log(err));
});

router.get("/phones/:phoneId", (req, res, next) => {
  const { phoneId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(phoneId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }
  Phone.findById(phoneId)
    .then((response) => {
      return res.status(200).json(response);
    })
    .catch((err) => console.log(err));
});

module.exports = router;
