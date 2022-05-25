const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.use("/phone", require('./phone.routes'))

module.exports = router;
