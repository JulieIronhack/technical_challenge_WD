const Phone = require("../models/Phone.model");

const router = require("express").Router();

router.get("/", async (req, res, next) => {
  const phones = await Phone.find();
  res.json(phones);
});

// You put the next routes here 👇
// example: router.use("/auth", authRoutes)

module.exports = router;
