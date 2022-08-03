const { default: axios } = require("axios");

const router = require("express").Router();

router.get('/phones', (req, res) => {

    axios
        .get('phones.json')
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.get('/phones/:id', (req, res) => {

    const { id } = req.params
    axios
        .get('phones.json')
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


module.exports = router;
