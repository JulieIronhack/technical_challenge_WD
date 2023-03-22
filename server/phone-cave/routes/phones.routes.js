const router = require("express").Router();

const phoneData = require("../data/phones.json")


router.get("/phones", (req, res, next) => {
    res.json(phoneData);
});

router.get("/phones/:id", (req, res, next) => {
    const phone = phoneData.find(phone => phone.id === phoneId)
    res.json(phone);
});

module.exports = router;
