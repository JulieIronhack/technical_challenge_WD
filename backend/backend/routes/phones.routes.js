const express = require("express");
const router = express.Router();
const data = "../../../data/phones.json";
const Phones = require("../models/Phone.model");
const mongoose = require("mongoose");

//retrieve data from all the phones
router.get("/phones", (req, res, next) => {
  Phones.find()
    .then((allPhones) => {
      res.json(allPhones);
    })
    .catch((error) => {
      console.log(
        "there is an error retrieving all the phones from the DB",
        error
      );
    });
});

//single phone

router.get("/phones/:id", (req, res, next) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return; //error handeling
  }

  Phones.findById(req.params.id)
    .then((onePhone) => res.status(200).json(onePhone))
    .catch((error) => {
      console.log(error);
    });
});
router.get("/", (req, res, next) => {
  res.json("All good in here");
});

module.exports = router;
