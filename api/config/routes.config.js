const express = require('express')
const router = express.Router()

const phonesController = require('../controllers/phones.controllers')

router.get('/phones', phonesController.list)
router.get('/phones/:id', phonesController.detail)

module.exports = router