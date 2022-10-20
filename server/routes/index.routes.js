const router = require("express").Router();
const phones = require('../data/phones.json')
const path = require('path')

router.get("/", (req, res, next) => {
  res.json(phones);
});

router.get("/:id", (req,res,next) => {
  const searchedId = parseInt(req.params.id)
  const [phoneWithId] = phones.filter(phone => phone.id === searchedId)
  res.json(phoneWithId)
})

router.get("/:id/image", (req,res,next) => {
  const searchedId = parseInt(req.params.id)
  const [phoneWithId] = phones.filter(phone => phone.id === searchedId)
  const pathToRoot = __dirname.slice(0,__dirname.length-7)
  const pathToImage = path.join(pathToRoot,'/assets/images/' ,phoneWithId.imageFileName)
  console.log(pathToImage)
  res.type('png')
  res.sendFile(pathToImage)
})

module.exports = router;
