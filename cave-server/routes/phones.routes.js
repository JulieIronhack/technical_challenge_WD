const router = require("express").Router();
const Phone = require("../seeds/phones.seed.json");

// GET '/phone' => Show all phones.
router.get("/", (req, res, next) => {
  res.status(200).json(Phone);
});

// GET '/phone/:phonesId' => Show a phone details.
router.get("/:phoneId", (req, res, next) => {
  const { phonesId } = req.params;
  const responseId = Phone.filter((eachPhone) => (eachPhone.id = phonesId));
  
  res.status(200).json(responseId);
});

module.exports = router;
