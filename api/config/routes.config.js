const express = require("express");
const router = express.Router();

const { phone } = require("../controllers");

router.get("/phones", phone.list);
router.get("/phones/:id", phone.detail);

module.exports = router;
