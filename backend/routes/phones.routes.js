const router = require("express").Router();
const phones = require("../data/phones.json");

router.get("/", (req, res, next) => {
  res.json(phones);
});

router.get("/:id", (req, res, next) => {
  const phone = Object.keys(phones).find((item) => item === req.params.id);
  res.json(phones[phone]);
});

module.exports = router;
