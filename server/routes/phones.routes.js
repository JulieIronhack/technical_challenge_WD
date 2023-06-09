const express = require("express");
const router = express.Router();
const phones = require("../data/phones.json");

router.get("/phones", (req, res) => {
  res.json(phones);
});

router.get("/phones/:id", (req, res) => {
  const phoneId = parseInt(req.params.id, 10);
  const phone = phones.find((p) => p.id === phoneId);

  if (phone) {
    res.json(phone);
  } else {
    res.status(404).json({ message: "Phone not found" });
  }
});

module.exports = router;
