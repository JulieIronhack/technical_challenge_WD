const router = require("express").Router();
const dataPhones = require('../data/phones.json')


router.get("/", (req, res, next) => {
  res.json(dataPhones);
});

router.get("/:id", (req, res) => {
  const phoneId = parseInt(req.params.id);
  const phone = phonesData.find(phone => phone.id === phoneId);

  if (!phone) {
    res.status(404).json({ error: 'Phone not found' });
  }
  else {
    res.json(phone);
  }

})

module.exports = router;
