const  mongoose = require("mongoose");
const router = require("express").Router();
const phones = require("../data/phones.json");

// READ phones

router.get("/phones", (req, res, next) => {
    phones.find()
        .then(response => res.json(response))
        .catch(err => {
            console.log("error getting list of phones", err)
            res.status(500).json({
                message: "error getting list of phones",
                error: err
            });
        })
})