const express = require('express');
const router = express.Router();

const phones = require('../controllers/phones.controllers')

router.get('/phones', phones.list)

module.exports = router;