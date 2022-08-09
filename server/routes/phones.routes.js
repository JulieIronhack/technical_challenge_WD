const router = require('express').Router();

const Phone = require('../models/Phone.model');


router.get('/phones', (req, res, next) =>{
Phone.find()
.then(allPhones => res.json(allPhones))
.catch(err=> res.json(err))
});

router.get('/phones/:id', (req, res, next)=>{
    Phone.findById(req.params.id)
    .then(onePhone => res.status(200).json(onePhone))
    .catch(err => res.json(err))
})

module.exports = router;