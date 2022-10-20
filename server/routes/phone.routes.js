const router = require("express").Router();

const Phone = require('../models/Phone.model');

const phonesData = require ('../data/phones.json')

// GET /api/phones - send all phones

router.get('/phones', (req, res) =>{
    Phone.find()
        .then(phones => res.json(phonesData))
        .catch(err => console.log(err))
})


// GET /api/phones/:id- send a phone details

router.get('/phones/:id', (req, res) => {
    const { phoneId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(phoneId)) {
        res.status(400).json({ message: 'Specified id is not valid' });
        return;
      }

    Phone.findById(phoneId)
          .then(phone => res.json(phone))
        .catch(err => console.log(err))
})


module.exports = router;