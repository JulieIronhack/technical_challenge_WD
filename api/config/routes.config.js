const express = require('express')
const router = express.Router()

const phoneCtrl = require('../controllers/phone.controller')

router.get('/phones', phoneCtrl.list)
router.get('/phones/:id', phoneCtrl.detail)

module.exports = router