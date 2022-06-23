const router = require("express").Router();
const phonesArr = require('../data/phones.json')

//GET /api/phones   Show all phones (use the phones.json) as fake data
router.get('/', (req, res, next) => {
    
    res.json(phonesArr)
})

//GET /api/phones/:id   Show a phone details
router.get('/:id', (req, res, next) => {
    const { id } = req.params
    let phoneInformation = phonesArr.find(phone => phone.id==id)
    if(!phoneInformation) phoneInformation = { errorMessage: 'Phone not found' }
    res.json(phoneInformation)
})

module.exports = router