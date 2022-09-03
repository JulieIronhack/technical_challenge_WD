const express = require("express");
const router = express.Router();
const Phone = require("../models/Phone.model");

router.get("/", async (req, res, next) => {
    try {
        const phones = await Phone.find()
        return res.status(200).json(phones)
    } catch (error) {
        next(error)
    }
});

router.get("/:id", async (req, res, next) => {
    try {
        const { id } = req.params
        const phone = await Phone.findById(id);

        return res.status(200).json({ phone })
    } catch (error) {
        next(error)
    }
});

module.exports = router