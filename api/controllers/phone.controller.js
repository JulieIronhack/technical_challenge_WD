const Phone = require("../models/phone.model");
const phonesData = require ("../data/phones.json");


module.exports.list = (req,res,next ) => {
  res.json(phonesData)
}

module.exports.detail = (req,res,next ) => {
    const phoneDetail = phonesData.filter(phone => {
     phone.id == req.params.id
    })
	res.json(phoneDetail[0])
}