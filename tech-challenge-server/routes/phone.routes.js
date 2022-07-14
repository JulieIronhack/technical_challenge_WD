const router = require("express").Router();

router.get("/phones", (req, res, next) => {
    res.json("Displaying all phones");
  });
  
  router.get("/phones/:id", (req, res, next) => {
    res.json("Displaying single phone");
  });

  module.exports = router;