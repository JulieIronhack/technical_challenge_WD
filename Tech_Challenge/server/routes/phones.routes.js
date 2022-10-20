const router = require("express").Router();

const data = require('../data/phones.json')

router.get('/', (req, res, next) => {
    
	res.json(data)
});

router.get('/:id', (req, res, next) => {
    const phone = data.filter(eachPhone => {
        return eachPhone.id == req.params.id
    })

	res.json(phone[0])
});

module.exports = router;