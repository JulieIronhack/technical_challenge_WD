const phones = require('../../data/phones.json');

 module.exports.list = (req, res, next) => {
      res.status(200).json(phones)
 };

 module.exports.detail = (req, res, next) => {
   const phone = phones.filter((phone) => phone.id == req.params.id) 

   if (!phone) {
     return res.status(404).json({ message: 'Phone not found' })
   }
   res.status(200).json(phone)
 }