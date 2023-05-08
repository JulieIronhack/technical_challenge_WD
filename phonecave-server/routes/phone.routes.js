const router = require("express").Router();
const phonesJson = require("../data/phones.json")

//GET "/api/phones" to send all phones data in the json
router.get("(/", (req,res,next) => {
    res.json(phonesJson)
})





module.exports = router;