const router = require("express").Router();
const phone = require("../models/Phones.model")
const { phones } = require("./../seeds/seeds")

router.get("/create-database", (req, res) => {

    phone
        .create(phones)
        .then((response) => res.status(202).json(response))
        .catch((err) => res.status(500).json({ message: "Internal Server Error" }))

});


module.exports = router;