const router = require("express").Router();
const phones = require('../data/phones.json');

// GET all phones
router.get('/phones', (req, res, next) => {
    res.json(phones)
});

// GET phone by ID
router.get('/phones/:id', (req, res, next) => {
    const phone = phones.find(p => p.id == req.params.id);
    console.log(phone)
    if (phone) {
        res.json(phone);
    } else {
        res.status(404).send('Phone not found');
    }
});


module.exports = router;