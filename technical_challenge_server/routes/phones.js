const express = require('express');
const router = express.Router();

const phones = require('../data/phones.json')

router.get('/phones', (req, res, next) => {
    res.send(phones);
})

router.get('/phones/:id', (req, res, next) => {
    const phoneId = req.params.id;
    const phone = phones.find(element => element.id == phoneId)
    res.send(phone);
})

module.exports = router;