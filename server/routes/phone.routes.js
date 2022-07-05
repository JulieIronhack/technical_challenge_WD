const { Router } = require("express");

const router = Router();

const Phone = require("../models/Phone.model")

router.get("/", async(req, res) => {
    try {
        const phones = await Phone.find();
        res.status(200).json(phones);
    } catch (error) {res.status(500).json({ message: "Error while trying to get all phones!", error: error.message })};
});

module.exports = router;