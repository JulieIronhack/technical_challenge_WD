const express = require("express");
const router = express.Router();
const phones = require("../data/phones.json");

// GET /api/phones - Returns the list of phones
router.get("/phones", (req, res) => {
  try {
    res.json(phones);
  } catch (error) {
    console.error("Error reading phones data: ", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// GET /api/phones/:id - Returns the detail of a phone by id
router.get("/phones/:id", (req, res) => {
  const phoneId = parseInt(req.params.id);
  const phone = phones.find((p) => p.id === phoneId);

  if (phone) {
    res.json(phone);
  } else {
    res.status(404).json({ message: "Phone not found" });
  }
});

module.exports = router;
