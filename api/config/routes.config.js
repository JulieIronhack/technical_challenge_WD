const express = require("express");
const router = express.Router();
const { phones } = require("../controllers");

router.get("/phones", phones.getPhones);
router.get("/phones/:id", phones.getPhone)

module.exports = router;