const router = require("express").Router();
const mongoose = require("mongoose");

const Phone = require("../models/Phone.model");

//  GET /api/phones-  Retrieves list of all Phones
router.get("/phones",(req, res, next) => {
    Phone.find()
    .then((allPhones) => res.json(allPhones))
    .catch((err) => {
      console.log("error getting list of phones...", err);
      res.status(500).json({
        message: "error getting list of phones",
        error: err,
      });
    });
})

//  GET /api/phones/:phoneId -  Retrieves a specific Phone by id
router.get("/phones/:phoneId", (req, res, next) => {
    const { phoneId } = req.params;
  
    if (!mongoose.Types.ObjectId.isValid(phoneId)) {
      res.status(400).json({ message: "Specified id is not valid" });
      return;
    }
  
    Phone.findById(phoneId)
     
      .then((phone) => res.status(200).json(phone))
      .catch((err) => {
        console.log("error getting a phone details...", err);
        res.status(500).json({
          message: "error getting a phone details",
          error: err,
        });
      });
  });

module.exports = router;