const router = require("express").Router();
const Phone = require('./../models/Phone.model')

router.get('/', (req, res) => {

    Phone
        .find()
        .then(response => res.json(response))
        .catch(err => console.log(err))

})

router.get('/:id', (req, res) => {
    
    Phone
        .findById(req.params.id)
        .then(response => res.json(response))
        .catch(err => console.log(err))
})

module.exports = router;
