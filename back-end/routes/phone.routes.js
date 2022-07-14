const Phone = require("../models/Phone.model");

const router = require("express").Router();

// You put the next routes here 👇
// example: router.use("/auth", authRoutes)

router.get("/", async (req, res, next) => {
  const phones = await Phone.find();
  res.json(phones);
});

router.get("/:phoneId", async (req, res, next) => {
  const { phoneId } = req.params;
  const phone = await Phone.findById(phoneId);
  res.json(phone);
  console.log(">>>>> phone in server: ", phone);
});

module.exports = router;
