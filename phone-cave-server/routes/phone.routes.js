const router = require('express').Router()
const Phone = require('../models/Phone.model')


router.get('/phones', (req, res) => {

    Phone
        .find()
        .then(phones => res.json(phones))
        .catch(err => res.status(500).json(err))
})

router.get('/phones/:id', (req, res) => {

    const { id } = req.params

    Phone
        .findById(id)
        .then(phone => res.json(phone))
        .catch(err => res.status(500).json(err))
})


module.exports = router