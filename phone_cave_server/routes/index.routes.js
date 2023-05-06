const router = require("express").Router();
const phoneList = require("../../data/phones.json");

router.get("/phones", (req, res, next) => {
  res.status(200).json(phoneList);
});

router.get("/phones/:phoneId", (req, res, next) => {
  const { phoneId } = req.params;
  const [phone] = phoneList.filter((phone) => phone.id === Number(phoneId));
  res.status(200).json(phone);
});

module.exports = router;
