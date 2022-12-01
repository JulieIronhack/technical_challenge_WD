const router = require ('express').Router();

// GET '/phones' => Show all phones.
router.get('/', (req,res,next) => {

    res.status(200).json()

})

// GET '/phones/phonesId' => Show a phone details.
router.get('/:phonesId', (req, res, next) => {
    const {phonesId} = req.params;

    res.status(200).json()

})

module.exports = router;