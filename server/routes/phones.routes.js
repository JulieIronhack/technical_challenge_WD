const router = require("express").Router();
const Phone = require ("../models/Phone.model")

//Router GET '/api/phones' => Render all Phones
router.get('/', async (req, res, next) => {
  try {
    const allPhones = await Phone.find()
    res.json(allPhones)
  } catch (error) {
    res.json(error)
  }
})

//Router GET '/api/phones/:id' => Render one phone by id
router.get('/:id', async (req, res, next) => {
  const { id } = req.params
  try {
    const foundPhone = await Phone.findById(id)
    res.json(foundPhone)
  } catch (error) {
    res.json(error)
  }
})

module.exports = router;