const express = require("express");
const router = express.Router();
const path = require("path");

// Load phone data
const phonesFilePath = path.join(__dirname, '..', 'data', 'phones.json');
const phones = require(phonesFilePath);

router.get("/phones", (req, res) => {
  res.json(phones);
});

router.get("/phones/:id", (req, res) => {
    const phoneId = parseInt(req.params.id);
    const phone = phones.find(phone => phone.id === phoneId);
    if (!phone) {
      res.status(404).send("Phone not found");
    } else {
      res.json(phone);
    }
  });


module.exports = router;
  