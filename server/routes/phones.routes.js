const router = require('express').Router()
const Phone = require('../models/Phone.model')

// PHONE LIST
router.get('/', (req, res) => {

    Phone
        .find()
        .then((response) => res.json(response))
        .catch(err => res.status(500).json(err))
})



// PHONE DETAILS
router.get("/:id", (req, res) => {

    const { id } = req.params

    Phone
        .findById(id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

module.exports = router
