const router = require("express").Router();
const phones = require('./phones.routes')

router.get("/", (req, res, next) => {
    res.json("hola");
  });
  
router.use("/phones", phones);

module.exports = router;