const phonesData = require("../data/phones.json");

const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json(phonesData);
});

router.get("/:id", (req, res, next) => {
  const phoneId = req.params.id;

  const phoneDetails = phonesData.find((phone) => phone.id === +phoneId);

  res.json(phoneDetails);
});

module.exports = router;
