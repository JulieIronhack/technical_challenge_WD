const router = require("express").Router();
const mongoose = require("mongoose");

const Phone = require("../Models/PhoneModel");


router.get("/getPhones", (req, res, next) => {
    Phone.find() 
      .then((phonesFromDB) => {
        res.json(phonesFromDB);
      })
      .catch((err) => {
        console.log("error getting list of phones", err);
        res.status(500).json({
          message: "error getting list of phones",
          error: err,
        });
      });
  });

// GET phones by id
router.get("/:phoneId", (req, res, next) => {
    const { phoneId } = req.params;
  
    if (!mongoose.Types.ObjectId.isValid(phoneId)) {
      res.status(400).json({ message: "Specified id is not valid" });
      return;
    }
  
    Car.findById(phoneId) 
      .then((phone) => res.json(phone)) 
      .catch((err) => {
        console.log("error getting details of the phone", err);
        res.status(500).json({
          message: "error getting details of the phone",
          error: err,
        });
      });
  });


  module.exports = router;