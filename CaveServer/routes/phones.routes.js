const router = require("express").Router();
const Phone = require("../models/Phone.model");

// GET '/phones' => Show all phones.
router.get("/", async (req, res, next) => {
  try {
    const response = await Phone.find();
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
});

// GET '/phones/phonesId' => Show a phone details.
router.get("/:phonesId", async (req, res, next) => {
  const { phonesId } = req.params;

  try {
    const responseId = await Phone.findById(phonesId);
    res.status(200).json(responseId);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
