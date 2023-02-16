const router = require("express").Router();
const mongoose = require("mongoose");
const Phone = require('../models/Phone.model');

//  Render all the phones
router.get("/phones", (req, res) => {
  Phone.find()
    .then((allPhones) => res.json(allPhones))
    .catch((err) => res.json(err));
});

// Retrieves a specific phone by its id
router.get("/phones/:id", (req, res) => {
    const phoneId = req.params.phoneId;
  
    if (!mongoose.Types.ObjectId.isValid(phoneId)) {
      res.status(400).json({ message: "Specified id is not valid" });
      return;
    }
  
    Phone.findById(phoneId)
      .then((response) => {
        res.json(response)
      })
      .catch((err) => res.json(err));
  });

module.exports = router;
