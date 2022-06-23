const router = require("express").Router();
const phonesJson = require("../bin/seeds")

// GET "/api/phones" to send all phones data in the json
router.get("/", (req, res, next) => {
  res.json(phonesJson)
})

module.exports = router;