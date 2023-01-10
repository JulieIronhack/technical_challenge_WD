const router = require("express").Router();
const data = require("../phones.json");

router.get("/phones", (req, res) => {
  res.json(data); 
});

router.get("/phone/:id", (req, res) => {
  const phoneId = req.params.id;
  const phone = data.filter(
    (phone) => Number(phone.id) === Number(phoneId)
  )[0];
  res.json(phone); 
});

module.exports = router;
