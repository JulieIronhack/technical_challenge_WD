const router = require("express").Router();
const phone = require("./../models/Phones.model")

router.get("/phones", (req, res) => {
    phone
        .find()
        .then((response) => res.status(202).json(response))
        .catch((err) => res.status(500).json({ message: "Internal Server Error" }))


});

router.get("/phones/:id", (req, res) => {
    const { id } = req.params

    phone
        .findById(id)
        .then((response) => res.status(202).json(response))
        .catch((err) => res.status(500).json({ message: "Internal Server Error" }))
});


module.exports = router;
