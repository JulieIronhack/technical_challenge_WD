const router = require("express").Router();
const data = require("../data/phones.json")

router.get("/phones",(req,res,next)=>{
 res.json(data)
})

router.get("/phones/:id",(req,res,next)=>{
    const idToFind = parseInt(req.params.id);
    const result = data.filter(obj => obj.id === idToFind);
    res.json(result)
  })

module.exports = router