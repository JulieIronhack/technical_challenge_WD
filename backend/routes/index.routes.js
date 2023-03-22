const router = require("express").Router();
const axios = require("axios");
const phones = require("../data/phones.json");
// console.log("PHONES" ,phones)
router.get("/", (req, res) => {
  res.json("All good in here");
});

router.get("/phones", async (req, res) => {
  res.json(phones);
});

router.get("/phones/:id", async (req, res) => {
  const phone = phones.find((phone) => {
    const phoneId = phone.id.toString();
    if (phoneId === req.params.id) {
      return phone;
    }
  });
  res.json(phone);
});

module.exports = router;
