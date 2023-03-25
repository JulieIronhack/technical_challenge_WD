const express = require("express");
const router = express.Router();

//  GET /api/phones -  Retrieves all of the phones
router.get("/", (req, res, next) => {
  Phone.find()
    .then((allPhones) => res.json(allPhones))
    .catch((err) => res.json(err));
});


router.get("/phones", (req, res, next) => {
    Phone.find()
      .then((allPhones) => res.json(allPhones))
      .catch((err) => res.json(err));
  });


  //  GET /api/phones/:phoneId -  Retrieves a specific phone by id
  router.get("/phones/:phoneId",
  (req, res, next) => {
    const { phoneId } = req.params;
  
    if (!mongoose.Types.ObjectId.isValid(phoneId)) {
      res.status(400).json({ message: "Specified id is not valid" });
      return;
    }
  
    Phone.findById(phoneId)
      .then((phone) => res.status(200).json(phone))
      .catch((error) => res.json(error));
  });