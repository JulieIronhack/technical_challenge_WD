const router = require("express").Router();
const phone_cave = require('./phones.json');

router.get("/telephones", (req, res) => {
    try {
        return console.log(phone_cave);
    }
    catch (err) {
        console.error(err);
    }
})

module.exports = router;