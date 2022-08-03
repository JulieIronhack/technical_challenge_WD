const data = require('../data/phones.json')

const router = require("express").Router()

router.get("/allPhones", (req, res, next) => {
    res.json(data);
});

router.get("/:phone_id", (req, res, next) => {
    const { phone_id } = req.params
    const onePhone = data.filter(element => element.id === Number(phone_id))
    res.json(onePhone);
});

module.exports = router;