const express = require('express');
const router = express.Router();
const phones = require('../controllers/phones.controller')

router.get('/phones', phones.list )


module.exports = router;