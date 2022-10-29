const express = require("express");
const router = express.Router();
const {phones} = require('../controllers');

router.get("/",  phones.list);
router.get("/:id", phones.detail);


module.exports = router;
