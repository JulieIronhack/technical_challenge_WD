const router = require("express").Router();
const mongoose = require("mongoose");

const Phone = require("../models/Phone.model");

router.get("/", async (req, res, next) => {
  try {
    const response = await Phone.find();
    res.status(200).json(response);
  } catch (error) {
    res.json(error);
  }
});

router.get("/:phoneId", async (req, res, next) => {
  const { phoneId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(phoneId)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  try {
    const response = await Phone.findById(phoneId);
    res.status(200).json(response);
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
