const router = require("express").Router();
const Phones = require("../models/Telephones.model");

router.get("/telephones", async (req, res) => {
  try {
    const phones = await Phones.find();
    console.log("here are the products");
    res.json({
      phones,
    });
  } catch (err) {
    res.status(400).json({
      errorMessage: "Error in fetching phones from the server! " + err.message,
    });
  }
});

module.exports = router;
