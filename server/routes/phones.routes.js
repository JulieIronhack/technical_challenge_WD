const router = require("express").Router();
const Phone = require("../models/Phone.model");


router.get('/getPhones', (req, res) => {


    Phone
        .find()
        .then(phones => {
            res.json(phones)
        })
        .catch(err => res.status(500).json(err))

})
router.get('/getById/:id', (req, res) => {
    const { id } = req.params

    Phone
        .findById(id)
        .then(phones => {
            res.json(phones)
        })
        .catch(err => res.status(500).json(err))

})



module.exports = router