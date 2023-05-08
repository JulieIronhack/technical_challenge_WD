const express = require("express");
const router = express.Router();
const phones = require("../data/phones.json");

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.get("/phones/", (req, res, next) => {
  if (phones.length > 0) {
    res.status(200).json(phones);
  } else {
    res.status(404).json("No phones found");
  }
});

router.get("/phones/:id", (req, res, next) => {
  const id = req.params.id;

  try {
    const data = phones.find((phone) => phone.id == id);

    if (data !== undefined) {
      res.status(200).json(data);
    } else {
      res.status(404).json("Phone not found");
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
