const router = require('express').Router();
const { default: mongoose } = require('mongoose');
const phoneData = require('../data/phones.json');

router.get('/phones', (req, res) => {
    if(!phoneData) {
        res.status(400).json({ errorMessage: 'no phones are currently available'})
        return;
    }
    res.json(phoneData)
})

router.get('/phones/:id', (req, res) => {
    const { phoneId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(phoneId)) {
        res.status(400).json({ message: 'specified id is not valid'});
        return;
    }
    phoneData.findById(phoneId)
        .then(phone => res.json(phone))
        .catch(err => {
            console.log('error getting phone details...', err);
            res.status(500).json({
                message: 'error getting phone details...',
                error: err
            })
        });
});

module.exports = router;

