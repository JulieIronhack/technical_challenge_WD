const router = require("express").Router();
const mongoose = require("mongoose");
const Phone = require("../models/Phone");

//get
router.get("/", (req, res) => {
    Phone.find()
    .then( todosLosPhones =>{
         res.json(todosLosPhones)
    }).catch(console.log)
})

//post
router.route('/post-phone').post((req, res, next) => {
  Phone.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

//put
router.put("/edit/:Id", (req, res) =>{
    const { Id } = req.params
    Phone.findByIdAndUpdate(Id, req.body)
    .then(newEdit =>{
        res.json(newEdit)
    }).catch(console.log)
})

//delete
router.delete("/delete/:Id", (req, res) =>{
  const { Id } = req.params
  Phone.findByIdAndDelete(Id)
  .then(deletePhone =>{
      res.json(deletePhone)
  }).catch(console.log)
})

module.exports = router