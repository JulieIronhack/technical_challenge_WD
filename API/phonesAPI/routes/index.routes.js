const router = require("express").Router();
const telephones = require("../phones.json"); 

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.get("/telephones", (req, res, next) => {
  res.json({telephones});
});

module.exports = router;
