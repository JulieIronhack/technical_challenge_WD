// importing the router and model
const router = require("express").Router();
const Phone = require("../models/phonesModel");

// GET to show all phones
router.get("/phones", (req, res, next) => {
  Phone.find()
    .then((allPhones) => {
      console.log(allPhones);
      res.json(allPhones)
    })
    .catch((err) => res.json(err));
});


// GET to show a phone details
router.get("/phones/:id", (req, res, next) => {
  const { phoneId } = req.params;

  Phone.findById(phoneId)
    .then((phone) => res.status(200).json(phone))
    .catch((error) => res.json(error));
});


module.exports = router;