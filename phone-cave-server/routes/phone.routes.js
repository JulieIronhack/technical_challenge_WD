const router = require("express").Router();

const mongoose = require('mongoose');

const data = require('../data/phones.json');

// GET /api/phones  -  Get list of phones
router.get('/phones', (req, res, next) => {
    res.json(data);
})

// GET /api/phones/:phoneId -  Retrieves a specific phone by id
router.get('/phones/:phoneId', (req, res, next) => {
    const { phoneId } =  req.params;
    const phone = data.find((phone) => (phone.id = phoneId));
    
    res.json(phone);
})

module.exports = router;