const router = require("express").Router();
const phones = require("../../../data/phones.json");

// Show all phones
router.get("/", (req, res) => {
    res.json(phones);
});

// Show a phone details
router.get("/:id", (req, res) => {
    const {id} = req.params;
    const phone = phones.find((element) => {
        element.id === id
    })
    res.json(phone)
})

module.exports = router;