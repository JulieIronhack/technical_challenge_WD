const router = require("express").Router();
const data = require('../data/phones.json')

router.get("/phones", (req, res, next) => {
    return res.json(data)
});

router.get("/phones/:phoneId", (req, res, next) => {
    const {phoneId} = req.params
    const foundPhone = data.find(phone => phone['id']==phoneId)
    //foundPhone.imageFileName = `../assets/images/${foundPhone.imageFileName}`
    return res.json(foundPhone)
});

module.exports = router;

