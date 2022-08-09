const router = require("express").Router();
const phonesJson = require('./../data/phones.json')

router.get("/", (req, res, next) => {
    res.json(phoneJson)
});


module.exports = router;
