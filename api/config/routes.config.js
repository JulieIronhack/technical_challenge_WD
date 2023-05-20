const express = require("express");
const router = express.Router();

router.get("/phones", (req, res) => {
  res.send("Phone list");
});

router.get("/phones/:id", (req, res) => {
  res.send("Phone detail");
});

module.exports = router;