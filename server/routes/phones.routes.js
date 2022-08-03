//We need express
const router = require("express").Router();
//We need the phones API
const phonesDataBase = require("../data/phones.json")

router.get("/phones", (req, res, next) => {
    res.json(phonesDataBase)
})

router.get("/:phones_id", (req, res, next) => {

})

module.exports = router;