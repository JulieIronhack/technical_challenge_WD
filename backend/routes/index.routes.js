const router = require("express").Router();
const phoneRoute = require("./phones.routes")
router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.use("/phones", phoneRoute)
module.exports = router;
