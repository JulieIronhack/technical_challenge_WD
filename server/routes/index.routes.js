const router = require("express").Router();

// GET /api
router.get("/", (req, res, next) => {
  res.json("All good in here");
});

// GET /api/phones
const phonesRoutes = require('./phones.routes')
router.use("/phones", phonesRoutes)

module.exports = router;
