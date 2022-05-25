const router = require("express").Router()
const Phone = require("./../models/Phone.model")


router.get('/', (req, res) => {

    Phone
        .find()
        .then((response) => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.get("/:id", (req, res) => {

    const { id } = req.params

    Phone
        .find({id : id})
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


module.exports = router