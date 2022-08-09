const router = require('express').Router()
const phoneData = require("../data/phones.json");


router.get('/phones', (req,res)=>{
    if(!phoneData){
        res.status(400).json({ errorMessage: "No phones available"})
        return;
    }
    res.json(phoneData)
})

router.get('/phones/:id', (req,res)=>{
    const phoneId = req.params.id;

    phoneData.find(phoneId)
    .then(phone =>{
        if(!phone){
            res.status(400).json({ errorMessage: "Phone not found"})
            return;
        }
        res.json(phone)
    })
})
module.exports = router;