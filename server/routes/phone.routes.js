const router = require("express").Router();
const PhoneModel = require("../models/Phone.model")

router.get("/", async (req, res, next) => {
    try {
        const response = await PhoneModel.find();
        res.json(response);
        return;
    } catch (error) {
        res.json(error);
    }
})

router.get("/:id", async (req, res, next) => {
    const { id } = req.params;
    try {
        const response = await PhoneModel.findOne({ id: id });
        res.json(response);
    } catch (error) {
        res.json(error);
    }
})

module.exports = router;