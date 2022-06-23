const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

// You put the next routes here 👇
// example: router.use("/auth", authRoutes)
const phonesRoutes = require ('./phones.routes')
router.use("/phones", phonesRoutes)

module.exports = router;
