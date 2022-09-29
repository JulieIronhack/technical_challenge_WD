const router = require("express").Router();
const axios = require('axios')

router.get("/phones", (req, res, next) => {
    axios.get('../data/phones.json')
    .then((response) => {
      console.log(response.data)
        const phoneData = response.data;
      res.render("phones/phonesList", {phoneData});
    }) 
    .catch(err => console.error(err))
  });
  

router.get("/phones/:id",(req, res, next) => {
    axios.get('../data/phones.json')
    .then((response) => {
      console.log(response.data)
        const phoneData = response.data.filter( phone => phone.id=== req.params.id);

      res.render("phones/phonesDetail", {phoneData});
    }) 
    .catch(err => console.error(err))
})


module.exports = router;