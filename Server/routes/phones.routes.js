const router = require("express").Router();
const { default: mongoose } = require("mongoose");
const Phone = require("../models/phone.model");



router.get('/phones', (req,res, next) => {
    Phone.find()
    .then(response => res.json(response))
    console.log(response, "this one")
    .catch(err => {
        console.log("error getting phones", err);
        res.status(500).json({
            message: "error getting phones from DB",
            error: err
        });
    })
})

router.get("phones/:id", (req, res, next) => {
const {id} = req.params
    Phone.findById(id)
        .then(phone => res.json(phone))
        .catch(err => {
            console.log("error getting phone details", err);
            res.status(500).json({
                message: "error getting phones details from DB",
                error: err
            });
        })    
})

module.exports = router;