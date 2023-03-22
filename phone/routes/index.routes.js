const router = require("express").Router();
const phones = require("../data/phones.json")

router.get("/phones", (req, res, next) => {  
  res.json(phones);
});

router.get("/phones/:id", (req, res) => {  
  const phoneDetails = phones.filter((phone) => phone.id == req.params.id)
  console.log(req.params.id)
  res.json(phoneDetails);
});

module.exports = router;
