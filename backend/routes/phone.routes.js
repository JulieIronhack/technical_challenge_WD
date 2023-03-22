const router = require("express").Router();
const phoneList = require('../data/phones.json')

router.get("/", (req, res, next) => {
  res.json(phoneList);
});

router.get("/:id", (req, res, next) => {
  const phone = Object.keys(phoneList).find((item) => item === req.params.id);
  res.json(phoneList[phone]);
});

module.exports = router;