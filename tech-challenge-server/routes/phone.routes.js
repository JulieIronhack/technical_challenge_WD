const data = require('../data/phones.json')

const router = require("express").Router();

router.get("/phones", async (req, res, next) => {
    res.json(data);
  });
  
  router.get("/phones/:id", (req, res, next) => {
    const {id} = req.params
    const singlePhone = data.filter(element => element.id === Number(id))
    res.json(singlePhone);
  });

  module.exports = router;