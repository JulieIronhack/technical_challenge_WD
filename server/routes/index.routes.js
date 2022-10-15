const router = require("express").Router();

const phoneRouter = require("./phones.routes")

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

// You put the next routes here 👇
// example: router.use("/auth", authRoutes)

router.use ("/phones", phoneRouter)
module.exports = router;
