const express = require("express");
const router = express.Router();
const phones = require("../controllers/phone.controller");

router.get("/phones", phones.list);
router.get("/phones/:id", phones.detail);

module.exports = router;