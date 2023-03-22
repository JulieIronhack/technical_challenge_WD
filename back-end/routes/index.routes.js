const router = require("express").Router();
const phones = require('../data/phones.json')



router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.get("/phones", (req, res) => {
  console.log('Fetching the phones')
  res.json(phones)
});

router.get("/phones/:id", (req, res) => {
  let name = req.params.id
  let phone = phones.find(phone => phone.name === name)
  console.log(phone)
  res.json(phone)
});


module.exports = router;
