const router = require("express").Router();
const phones = require("../data/phones.json") 


router.get("/", (req,res)=>{
  res.json(phones)
})

router.get("/:id", (req,res)=>{
  const {id} = req.params
 
  const phone = phones.find(element => element.id === Number(id))
  if(phone){
    res.json(phone)
  } else {
    res.status(404).send("Not Found")
  }
})

module.exports = router;
