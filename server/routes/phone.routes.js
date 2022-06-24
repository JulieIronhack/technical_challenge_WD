const router = require("express").Router();
const PhonesModel = require("../models/Phones.model")

//! Todo nuestro CRUD

//! GET ---> "api/phones"
router.get("/", async (req, res, next) => {

    try {
        const response = await PhonesModel.find()
        res.json(response)
    } 
    catch (error) {
        next(error);
    }

})

//! GET ---> "api/phones/:id"
router.get("/:id", async (req, res, next) => {
    const {id} = req.params

    try {
        const response = await PhonesModel.findOne({id:id})
        res.json(response)
    } 
    catch (error) {
        next(error);
    }

})

module.exports = router;