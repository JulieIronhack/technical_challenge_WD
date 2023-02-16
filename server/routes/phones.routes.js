
const phones = require('../../data/phones.json')

const router = require("express").Router();


router.get("/phones", (req, res, next) => {
  res.json(phones);
});


router.get('/phones/:id', (req,res)=> {
  const phone = phones.find(phone=>{
   return phone.id === +req.params.id
  })
  res.json(phone)
})

module.exports = router;
