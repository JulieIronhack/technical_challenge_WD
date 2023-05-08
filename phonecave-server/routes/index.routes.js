const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.json("All good in here");
});


//All routes

const phoneRoutes = require("./phone.routes")
router.use("/phones", phoneRoutes)
module.exports = router;
