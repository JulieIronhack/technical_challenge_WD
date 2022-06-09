const express = require("express");
const phoneController = require("../controllers/phoneController");

const router = express.Router();

router.route("/").get(phoneController.getAllPhones);
router.route("/:id").get(phoneController.getPhoneById);

module.exports = router;
