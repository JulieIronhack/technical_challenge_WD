const { default: mongoose } = require('mongoose');

const router = require("express").Router()
const Phone = require('../models/Phone.model');


// GET PHONES

router.get('/phones', (req,res,next) => {

    Phone.find()
        .then( (response) => {
            res.json(response)
        })
        .catch( err => {
            console.log('error on getting phones, backend route', err);
            res.status(500).json({
                message: "error getting list of phones",
                error: err
            })
        });
})


//GET phone by id

router.get('/phones/:id', (req,res,next) => {
    const { id } = req.params;
    console.log("phone", req.body)

    if (!mongoose.Types.ObjectId.isValid(id)){
        res.status(400).json({ message: "Specified id is not Valid" });
        return;
    }

    Phone.findById(id)
        .then((phone) => res.json(phone))
        .catch( (err) => {
            console.log("error getting phone by id, backend", err);
            res.status(500).json({
                message: "error getting phone details",
                error: err
            });
        });
});

module.exports = router;