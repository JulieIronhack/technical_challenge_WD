const router = require("express").Router();
const req = require("express/lib/request");
const Phones = require('./../models/Phones.model')


router.get('/', (req, res) => {

    Phones
        .find()
        .then(response => {
            res.json(response)
        })
        .catch(err => console.log(err))
})

router.get('/:id', (req, res) => {

    const { id } = req.params

    Phones

        .findById(req.params.id)
        .then(phone => {
            console.log(phone)
            res.render('phone/:id', phones)
        })
        .catch(err => console.log(err))



})




module.exports = router;

