const router = require("express").Router();
const phones = require('../data/phones.json');

// GET all phones
router.get('/phones', (req, res, next) => {
    res.json(phones)
});

// GET phone by ID
router.get('/phones/:phoneId', (req, res, next) => {
    const phone = phones.find(p => p.id.toString() == req.params.phoneId);
    console.log(phone)
    if (phone) {
        res.json(phone);
    } else {
        res.status(404).send('Phone not found');
    }
});




module.exports = router;