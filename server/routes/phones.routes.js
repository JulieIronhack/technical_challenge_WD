const express = require('express');
const router = express.Router();

const phoneData = require("../data/phones.json")


router.get('/', (req, res, next) => {
    if(!phoneData){
        res.status(400).json({ message: 'Phone Data not avaliable' })
        return;
    }
	res.json(phoneData)
});

router.get('/:id', (req, res, next) => {
    const phoneId = Number(req.params.id)

    const phone = phoneData.find(phone => phone.id === phoneId) 
    if(!phone){
        res.status(400).json({ message: `Phone with id: ${phoneId} not avaliable` })
        return;
    }
	res.json(phone)
});



module.exports = router;