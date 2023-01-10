const router = require("express").Router();
const Phone = require("../models/Phone.model");
router.get("/", async (req, res, next) => {
  try {
    const phones = await Phone.find();
    res.json({ result: phones });
  } catch (error) {
    res.json({ messageError: "error", error });
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const {id}=req.params
    const phone = await Phone.findById(id);
    res.json({result:phone})
  } catch (error) {
    res.json({ messageError: "error", error });
  }
});

module.exports = router;
