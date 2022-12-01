const router = require("express").Router();
const Phone = require("../seeds/phones.seed.json");

// GET '/phones' => Show all phones.
router.get("/", (req, res, next) => {
  res.status(200).json(Phone);
});

// GET '/phones/phonesId' => Show a phone details.
router.get("/:phonesId", (req, res, next) => {
  const { phonesId } = req.params;

  const responseId = Phone.filter((eachPhone) => (eachPhone.id = phonesId));
  res.status(200).json(responseId);
});

module.exports = router;
