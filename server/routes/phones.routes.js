const router = require('express').Router();

const phonesJSON = require("../data/phones.json");

router.get("/", (req, res, next) => {
    const phones = phonesJSON.map((phone) =>{
        return {...phone, imageFileName: `../assets/images/${phone.imageFileName}`}
    })

    res.json({phones})
})

router.get("/:id", (req, res, next) => {
    const { id } = req.params;

    const phone = phonesJSON.filter(phone => phone.id === Number(id))

    res.json({
        phone: {...phone, imageFileName: `../assets/images/${phone.imageFileName}`}
    })
})

module.exports = router;