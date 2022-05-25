const router = require("express").Router();

// router.get("/", (req, res) => {
//   res.json("All good in here");
// });

// router.get("/phones", (req, res) => {
//   res.json("All good in here");
// });

router.use("/", require("./phone.routes"))

module.exports = router;