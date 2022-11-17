const router = require("express").Router();
const data = require("../data/phones.json");

router.get("/phones", (req, res, next) => {
  res.json(data);
});

router.get("/phones/:phoneId", (req, res, next) => {
  const { phoneId } = req.params;
  const phone = data.find((phone) => (phone.id = phoneId));
  res.json(phone);
});

module.exports = router;
