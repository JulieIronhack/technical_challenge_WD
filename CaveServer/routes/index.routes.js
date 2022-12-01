const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

const phonesRoutes = require('./phones.routes');
router.use('/phones', phonesRoutes);

module.exports = router;
