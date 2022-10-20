const router = require("express").Router();
const mongoose = require('mongoose');
const phoneData = require("../data/phones.json")

const Phone = require('../models/Phone.model');

// GET /api/phones - Show all phones
router.get('/phones', (req, res) => {
    Phone.find()
        .then(phones => res.json(phones))
        .catch(err => console.log(err))
})

// GET /api/phones/:id - Show a phone details
router.get('/phones/:phoneId', (req, res) => {
    const { phoneId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(phoneId)) {
        res.status(400).json({ message: 'Specified id is not valid' });
        return;
      }

    Phone.findById(phoneId)
        .then(phone => res.json(phone))
        .catch(err => console.log(err))
})

module.exports = router;