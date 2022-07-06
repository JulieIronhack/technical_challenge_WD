const { Router } = require("express");

const router = Router();

const Phone = require("../models/Phone.model")

router.get("/", async (req, res) => {
    try {
        const phones = await Phone.find();
        res.status(200).json(phones);
    } catch (error) {res.status(500).json({ message: "Error while trying to get all phones!", error: error.message })};
});

router.get("/:_id", async (req, res) => {
    const throwError = (message, status) => {
        const error = new Error(message);
        error.status = status;
        throw error;
    };

    try {
        const { _id } = req.params;
        if (!(_id.length === 24) || !/^[a-z0-9]+$/.test(_id)) {
            throwError("Provided _id for the phone is invalid!", 400)
        };

        const phone = await Phone.findOne({ _id }, { __v: 0 });
        if (!phone) throwError("Provided _id does not match any _id in our database", 404);

        res.status(200).json(phone);
    } catch (error) {
        if (!error.status) error.status = 500;
        res.status(error.status).json({ message: "Error while trying one phone information!", error: error.message })
    }
});

module.exports = router;