const Phone = require("../models/Phone.model.js");

const router = require("express").Router();

router.get("/telephones", async (req, res, next) => {
  try {
    const data = await Phone.find();
    res.json(data);
  } catch (error) {
    res.status(400).json({
      errorMessage: "Error fetching phone list from server" + error.message,
    });
  }
});

router.get("/telephones/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await Phone.findById(id);
    res.json(data);
  } catch (error) {
    res.status(400).json({
      errorMessage: "Error fetching phone details from server" + error.message,
    });
  }
});

module.exports = router;
