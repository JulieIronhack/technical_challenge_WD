const router = require("express").Router();
const phoneData = require("../data/phones.json");

router.get("/", (req, res, next) => {
  res.json(phoneData);
});

router.get("/:id", (req, res, next) => {
  const { id } = req.params;
  res.json(phoneData[id]);
});

module.exports = router;
