const express = require("express");
const {Phones} = require('../routes');
const router = express.Router();

router.use('/phones', Phones);

module.exports = router;
