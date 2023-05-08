const router = require("express").Router();
const phonesData = require("../data/phones.json")

router.get("/phones", (req, res, next) => {
  res.json(phonesData);
});

router.get("/phones/:id", (req, res, next) => {
    const {id} = req.params
    const phonesDataId = phonesData.filter(filter=>filter.id===Number(id))
    res.json(phonesDataId)
});

module.exports = router;